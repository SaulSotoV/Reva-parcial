import { useEffect,useState } from "react"
import { UserService } from "../utility";
import {IUser} from "../interface"

export const GetUsersHook = () => {

    const [data,setData] = useState<IUser[]>([]);
    
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const users = await new UserService().get();
            setData(users);
            setLoading(false);
        }
        fetchData();
    },[])

    return { data,loading };
}


export const GetUserByIdHook = (id:any) => {

    const [data,setData] = useState<IUser>({id:0,email:"",name:"",phone:"",username:"",website:""});
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const user = await new UserService().getById(id);
            setData(user);
            setLoading(false);
        }

        if (id) {
            fetchData();
        }

    },[id])

    return { data,loading };
}

