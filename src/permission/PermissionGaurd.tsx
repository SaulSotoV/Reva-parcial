import { Navigate } from "react-router-dom";
import { AuthConsumer } from "../context/auth";

export const hasPermission = (userPermissions:any,requiredPermission:any) => {
    return requiredPermission.every((x:any) => userPermissions.includes(x));
}



export const PermissioGaurd = ({ user,requiredPermissions,children }:any) => {
    const userHasPermission = user && (user.role === "admin" || hasPermission(user.permissions || [],requiredPermissions));

    return userHasPermission ? <>{children}</> : null;

}

export const ProtectedRoute = ({ requiredPermissions,children }:any) => {
    const authConsumer = AuthConsumer();

    const userHasPermission = authConsumer!=null && authConsumer.user
        && (authConsumer.user.role === "admin" || hasPermission(authConsumer.user.permissions || [],requiredPermissions));

    return userHasPermission ? children : <Navigate to="/" replace />;

}