import axios from 'axios';
import { APIConstant } from '../constants';

const onSuccess=(response:any)=>{
    console.debug('Request Successful!',response);
    return response.data;
}

const onError = async (error:any) => {
    console.debug('Request Failed:',error);

    console.debug('Request Failed:',error.config);

    if (error.response) {
        console.debug('Status:',error.response.status);
        console.debug('Data:',error.response.data);
        console.debug('Headers:',error.response.headers);
    }
    return Promise.reject(error);
}

const request = async (options:any) => {
    let headers = {};
    const client = axios.create({
        baseURL: APIConstant.basePath,
        headers: { ...headers }
    });

    return client(options)
        .then(onSuccess)
        .catch(onError);
}

export class BaseService {

    static get = (url:string,isSecure = true) => {
        return request({
            url,
            method: 'GET'
        });
    }

    static post = (url:string,data:any,isSecure = true) => {
        return request({
            url,
            method: 'POST',
            data
        });
    }

    static put = (url:string,data:any,isSecure = true) => {
        return request({
            url,
            method: 'PUT',
            data
        });
    }

    static remove = (url:string,isSecure = true) => {
        return request({
            url,
            method: 'DELETE',
        });
    }

}