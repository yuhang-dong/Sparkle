import React from 'react';
import {Card, Badge} from 'antd'
import './SparkleNews.scss'
import logo from '../../logo.svg'
import {getTabs, getGoNodes, getNews} from "../../apis";

class SparkleNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [], // 最上方的切换页
            currentTabId: null,
            gos: [],
            news: []
        };
        this.changeTab = this.changeTab.bind(this);
    }
    render() {
        const tabs = this.state.tabs.map((tab, index) => {
            return <span key={index} onClick={() => this.changeTab(tab.tabId)} className={tab.tabId === this.state.currentTabId ? 'current':'' } >{tab.value}</span>
        })

        const gos = this.state.gos.map((go, index) => {
            return <a href={go.url} key={index}><span>{go.value}</span></a>
        })

        const news = this.state.news.map((nnew, index) => {
            return <div key={index} className="new">
                <div className="left">
                    <div className="avatar">
                        <img src={logo} alt="#"/>
                    </div>
                    <div className="info">
                        <div className="title">
                            <span>{nnew.title}</span>
                        </div>
                        <div className="desc">
                            <span className="topic">{nnew.go}</span>
                            <span>{nnew.author}</span>
                            <span>{React.$moment(parseInt(nnew.time)).fromNow()}</span>
                            <span>最后回复来自 <span>{nnew.lastResp}</span></span>
                        </div>
                    </div>
                </div>
                <div className="tail">
                    <Badge count={nnew.resps} style={{ backgroundColor: "lightgray", fontWeight: 'bold', fontSize: '16px' }}></Badge>
                </div>
            </div>
        })

        return <Card className={this.props.className + ' news_panel'}>
            <div className="tabs">
                {tabs}
            </div>

            <div className="gos">
                {gos}
            </div>

            <div className="news">
                {news}
            </div>
        </Card>
    }
    componentDidMount() {
        // 挂载声明周期
        // 取得tabs数据
        // TODO exception handler
        getTabs().then((response) => {
            if(response.status === 200) {
                this.setState({
                    tabs: response.data,
                }, () => {
                    this.changeTab(this.state.tabs[0].tabId)
                });
            }
        })

    }
    changeTab(tabId) {
        React.$nprogress.start();
        this.getData(tabId).then(data => {
            if(data.goNodesResp.status === 200) {
                this.setState({
                    gos: data.goNodesResp.data
                })
            }

            if(data.newsResp.status === 200) {
                this.setState({
                    news: data.newsResp.data
                })
            }

            this.setState({
                currentTabId: tabId
            }, () => {
                React.$nprogress.done();
            })
        })

    }

    async getData(tabId) {
        let goNodesResp = await getGoNodes(tabId);
        let newsResp = await getNews(tabId);
        return {
            goNodesResp,
            newsResp
        }

    }
}

export default SparkleNews;
