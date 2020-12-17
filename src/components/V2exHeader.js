import React from 'react'

class V2exHeader extends React.Component {
    render() {
        return <header>
            <div className="container">
                <div className="title">
                    <h1>V2EX</h1>
                    <div className="search">
                        <input type="text" className="input"/>
                    </div>
                </div>

                <div className="opera">
                    <span>首页</span>
                    <span>注册</span>
                    <span>登录</span>
                </div>

            </div>
        </header>
    }
}

export default V2exHeader;
