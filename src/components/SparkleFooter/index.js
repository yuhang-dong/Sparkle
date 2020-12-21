import React from 'react';
import './SparkleFooter.scss'

class SparkleFooter extends React.Component {
    render() {
        return <footer>
            <div className="container">
                <div className="helper">
                    <ul>
                        <li>关于</li>
                        <li>帮助文档</li>
                        <li>FAQ</li>
                        <li>API</li>
                        <li>我们的愿景</li>
                        <li>广告投放</li>
                        <li>感谢</li>
                        <li>实用小工具</li>
                        <li>4990人在线</li>
                        <li>最高纪录 5298</li>
                        <li>Select Language</li>
                    </ul>
                </div>
                <div className="slogan">
                    <span>创意工作者的社区</span>
                </div>
                <div className="website_info">
                    <span>VERSION: 3.9.8.5 62ms UTC 06:06</span>
                    <br/>
                    <span>Do have faith in what you're doing</span>
                </div>
            </div>
        </footer>
    }
}

export default SparkleFooter;
