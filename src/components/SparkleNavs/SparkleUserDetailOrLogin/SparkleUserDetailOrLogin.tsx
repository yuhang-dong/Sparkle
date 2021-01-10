import {useSelector} from "react-redux";
import {selectUser} from "./SparkleUserDeatilSlice";
import {DefaultProps} from "../../../types/framework";
import SparkleUserDetail from "./SparkleUserDetail/SparkleUserDetail";
import React from "react";
import SparkleAskLogin from './SparkleAskLogin/SparkleAskLogin';

function SparkleUserDetailOrLogin(props: DefaultProps) {
    const userDetail = useSelector(selectUser);

    const view = userDetail.userId ? <SparkleUserDetail className={props.className}/> : <SparkleAskLogin className={props.className}/>;

    return view
}


export default SparkleUserDetailOrLogin;
