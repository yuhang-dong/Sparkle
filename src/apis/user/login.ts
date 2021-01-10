import axios, {AxiosResponse} from 'axios';
import {LoginReq, LoginRespData} from "../../types/main/login";
import {Resp} from "../../types/base/HTTP";

export function doLogin(user: LoginReq): Promise<AxiosResponse<Resp<LoginRespData>>> {
    return axios.post('/api/v1/user/login', user);
}
