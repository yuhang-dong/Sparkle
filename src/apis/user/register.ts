import axios, {AxiosResponse} from 'axios';
import {RegisterReq, RegisterRespData} from "../../types/main/register";
import {Resp} from "../../types/base/HTTP";

export function doRegister(user: RegisterReq): Promise<AxiosResponse<Resp<RegisterRespData>>> {
    return axios.post('/api/v1/user/register', user);
}
