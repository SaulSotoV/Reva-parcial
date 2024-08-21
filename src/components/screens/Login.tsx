import React from 'react';
import { FormTextbox } from "../../element/"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";
import '../../login.css'
import { UserService  } from "../../utility/services/user";
import { BrowserUtility } from "../../utility/browser-utility";
import { StorageKeys } from "../../utility/constants";
import { useNavigate } from "react-router-dom";
import { AuthConsumer } from "../../context/auth";

const loginSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Enter password")
});


export const LoginScreen=()=>{
    const navigate = useNavigate();
    const authConsumer = AuthConsumer();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(loginSchema)
    });
    
    const [processing,setProcessing] = useState('');
    const [error,setError] = useState('');
    
    const login=async (formData:any)=>{
        try{
            setError("");
            setProcessing("Loading....");
            const result=await new UserService().login(formData);
            BrowserUtility.setObj(StorageKeys.user,result);
            if(authConsumer!=null){
                authConsumer.login(result);
            }
            navigate("/user")
        }
        catch(error:any){
            setError(error);
        }
        finally{
            setProcessing("");
        }
    }

    
    return(

    <div className="login-form">
      <form autoComplete="off" onSubmit={handleSubmit(login)}>
        <h2 className="text-center">Log in</h2>       
        <div className="form-group">
            <FormTextbox
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                error={errors.username?.message}
                control={control}
            />
        </div>
        <div className="form-group">
            <FormTextbox
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                error={errors.password?.message}
                control={control}
            />
        </div>
        <div className="form-group">
            {error && <p className="text-danger">{error}</p>}
            <button className="btn btn-primary" type="submit">{processing || "Login"}</button>
        </div>       
    </form>
</div>
        
    )   
}