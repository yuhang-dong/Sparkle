import React, {useContext} from 'react'
import {SearchOutlined} from '@ant-design/icons'
import {Input} from 'antd'
import {Link} from 'react-router-dom'
import './SparkleHeader.scss'
import {AllContext, UserDetail} from "../../store/store";
function SparkleHeader() {
    const {user, userDispatch} = useContext(AllContext);
    function logout(e: React.MouseEvent) {
        e.preventDefault();
        localStorage.removeItem("user");

        userDispatch({type:"removeUser", payload: {} as UserDetail})
    }
    const operator = !(user._id) ?
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
