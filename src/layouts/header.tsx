import { NavLink,useNavigate } from "react-router-dom"
import { AuthConsumer } from "../context"
import { PermissioGaurd } from "../permission/PermissionGaurd";

export const HeaderBar=()=>{

    const authConsumer = AuthConsumer();
    debugger
    const navigate = useNavigate();

    const logout = () => {
        if(authConsumer!=null){
            authConsumer.logout();
            navigate("/");
        }
    }
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                 <li className="nav-item">
                    <NavLink to={"/home"} className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/user"} className="nav-link">Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/service"} className="nav-link">Service</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/contact"} className="nav-link">Contact</NavLink>
                </li>
                <PermissioGaurd
                        requiredPermissions={["view-aboutus"]}
                        user={authConsumer!=null ? authConsumer.user:null}
                    >
                        <li className="nav-item">
                            <NavLink to={"/about"} className="nav-link">About</NavLink>
                        </li>
                 </PermissioGaurd>
            </ul>
            <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                    <a className="nav-link">Hi {authConsumer?.user.name}!</a>
                </li>
                <li className="nav-item">
                <a href="#" onClick={logout} className="nav-link">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}