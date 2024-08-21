import {useMemo,useState} from "react"
import {useNavigate,useSearchParams} from "react-router-dom"
import {AuthConsumer} from "../../context/auth"
import { GetUsersHook } from "../../hooks/user";
import {UserList} from "../page-component"

export const Users=()=>{
    const navigate=useNavigate();
    const authConsumer=AuthConsumer();

    const [searchParams]=useSearchParams();

    let {data:users,loading:usersLoading} =GetUsersHook();
    const [search,setSearch] = useState(searchParams.get('filter') || '');

    const filteredData=useMemo(()=>{
        return users.filter(x=>!search || x.name.includes(search))
    },[users,search])

    return(
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                             {usersLoading && <p className="lead">Loading...</p>}
                            <input
                                className="form-control"
                                placeholder="Search User"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                          &nbsp;
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <UserList
                                users={filteredData}
                                currentUser={authConsumer!=null?authConsumer.user:null}
                            />
                        </div>
                    </div>
            </div>
    )


}