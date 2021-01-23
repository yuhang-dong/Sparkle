import React from 'react'
import {SearchOutlined} from '@ant-design/icons'
import {Input} from 'antd'
import {Link} from 'react-router-dom'
import './SparkleHeader.scss'
import {useDispatch, useSelector} from "react-redux";
import {isLogin, selectUser} from "../SparkleNavs/SparkleUserDetailOrLogin/SparkleUserDeatilSlice";
import {removeUser} from '../SparkleNavs/SparkleUserDetailOrLogin/SparkleUserDeatilSlice';

function SparkleHeader() {

    const dispatch = useDispatch();

    function logout(e: React.MouseEvent) {
        e.preventDefault();
        localStorage.removeItem("user");
        dispatch(removeUser(null));
    }

    const user = useSelector(selectUser);
    const operator = !isLogin(user) ?
        <>
            <span><Link to="/register">注册</Link></span>
            <span><Link to="/login">登录</Link></span>
        </>
        :
        <>
            <span><Link to={`/user/${user._id}`}>{user.username}</Link></span>
            <span><button onClick={logout}>退出</button></span>
        </>
    return <header>
        <div className="container">
            <div className="header_wrapper">
                <div className="title">
                    <h1><a href="/">Sparkle</a></h1>
                    <div className="search">
                        <Input type="text" className="search_input" prefix={<SearchOutlined/>}/>
                    </div>
                </div>
                <div className="opera">
                    <span><Link to="/">首页</Link></span>
                    {operator}
                </div>
            </div>

        </div>
    </header>
}

export default SparkleHeader;
