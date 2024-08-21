import { NavLink } from "react-router-dom"
import {IUser} from "../../interface"
import { PermissioGaurd } from "../../permission/PermissionGaurd";

const UserRow = ({ user,currentUser }:any) => (
    <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>

            <PermissioGaurd
                requiredPermissions={["view-user-details"]}
                user={currentUser}
            >
                <NavLink className="btn btn-info mr-2" to={`${user.id}`}>
                    Details
                </NavLink>
            </PermissioGaurd>

            <PermissioGaurd
                requiredPermissions={["edit-users"]}
                user={currentUser}
            >
                <NavLink className="btn btn-primary" to={`/edit-user/${user.id}`}>
                    Edit
                </NavLink>
            </PermissioGaurd>

        </td>
    </tr>
);

export const UserList = ({ users,currentUser }:any) => (

    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {users.map((item:any) => <UserRow
                key={item.id}
                user={item}
                currentUser={currentUser}
            />)}
        </tbody>
    </table>
)