import { useNavigate,useParams } from "react-router-dom";
import { GetUserByIdHook } from "../../hooks/user";

export const UserDetails = () => {

    const navigate = useNavigate();
    const params = useParams();

    let { data: user,loading: usersLoading } = GetUserByIdHook(params["id"]);

    const redirectBack = () => {
        navigate(-1);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" onClick={redirectBack}>Go Back</button>
                </div>

            </div>
            <div className="row">

                <div className="col">
                    {usersLoading && <p className="lead">Loading...</p>}

                    <p>Name : {user?.name}</p>
                    <p>Phone : {user?.phone}</p>
                    <p>website : {user?.website}</p>
                    <p>Email : {user?.email}</p>
                </div>
            </div>
        </div>
    )
}