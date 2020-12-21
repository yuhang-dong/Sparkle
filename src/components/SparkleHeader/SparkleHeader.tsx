import React from 'react'
import {SearchOutlined} from '@ant-design/icons'
import {Input} from 'antd'
import './SparkleHeader.scss'

class SparkleHeader extends React.Component {
    render() {
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
                        <span>首页</span>
                        <span>注册</span>
                        <span>登录</span>
                    </div>
                </div>

            </div>
        </header>
    }
}

export default SparkleHeader;
