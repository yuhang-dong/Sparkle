import {UserDetail} from "../../components/SparkleNavs/SparkleUserDetailOrLogin/SparkleUserDeatilSlice";

export interface RegisterReq {
    username: string,
    password: string,
    email: string,
    confirm: string
}

export type RegisterRes = UserDetail;
