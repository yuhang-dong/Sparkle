import {UserDetail} from "../../components/SparkleNavs/SparkleUserDetailOrLogin/SparkleUserDeatilSlice";

export interface LoginReq {
    username: string,
    password: string,
    remember?: boolean
}

export type LoginRespData = UserDetail
