import {DefaultProps} from "../../../types/framework";
import SparkleUserDetail from "./SparkleUserDetail/SparkleUserDetail";
import React, {useContext} from "react";
import SparkleAskLogin from './SparkleAskLogin/SparkleAskLogin';
import {AllContext} from "../../../store/store";

function SparkleUserDetailOrLogin(props: DefaultProps) {
    const {user} = useContext(AllContext);

    const view = user._id ? <SparkleUserDetail className={props.className}/> : <SparkleAskLogin className={props.className}/>;

    return view
}


export default SparkleUserDetailOrLogin;
