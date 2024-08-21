import React from "react";
import { Controller } from "react-hook-form"

interface IProps{
    name:string;
    id:string;
    type:string;
    control?:any;
    error:any;
    [key: string]: any;  
}

export const FormTextbox=(props:IProps)=>{

    const {name,id,type,register,control,error,...rest}=props;

    return(
        <>
            <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <div className='error'>
                        <input
                            name={name}
                            id={id}
                            type={type}
                            onChange={(e) => field.onChange(e.target.value)}
                            value={field.value}
                            {...rest}
                            className="form-control"
                        />
                    {error && <p className="text-danger">{error}</p>}
                     </div>
                )}
            />
        </>
    )
}