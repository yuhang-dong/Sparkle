import {DefaultProps} from "../../../../types/framework";
import {Button} from "antd";
import React from "react";
import {Link} from "react-router-dom";
import style from './SparkleAskLogin.module.scss';
import {useHistory} from 'react-router-dom';
import SparkleCard from "../../../helper/SparkleCard/SparkleCard";

function SparkleAskLogin(props: DefaultProps) {
    const history = useHistory();
    function goRegister() {
        history.push('/register');
    }

    return <SparkleCard className={props.className}>
        <div className={style.title}>
            <h2>Sparkle 社区</h2>
        </div>

        <div className={style.body}>
            <Button type="default" onClick={goRegister} className={style.register}>现在注册</Button>
            <div>已注册用户请 <Link to="/login">登录</Link></div>
        </div>
    </SparkleCard>
}

export default SparkleAskLogin;
