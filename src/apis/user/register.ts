import axios, {AxiosResponse} from 'axios';
import {RegisterReq, RegisterRes} from "../../types/main/register";
import {Resp} from "../../types/base/HTTP";

export function doRegister(user: RegisterReq): Promise<AxiosResponse<Resp<RegisterRes>>> {
    return axios.post('/api/v1/user/register', user);
}

export function doUniqueEmail(email: string): Promise<AxiosResponse<Resp<{ unique: boolean }>>> {
    return axios.post('/api/v1/user/uniqueEmail', {email});
}
