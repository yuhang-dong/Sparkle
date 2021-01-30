import {UserDetail} from "../../store/store";


export interface LoginReq {
    email: string,
    password: string,
    remember?: boolean
}

export type LoginRespData = UserDetail
