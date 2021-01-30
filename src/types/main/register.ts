import {UserDetail} from "../../store/store";

export interface RegisterReq {
    username: string,
    password: string,
    email: string,
    confirm: string
}

export type RegisterRes = UserDetail;
