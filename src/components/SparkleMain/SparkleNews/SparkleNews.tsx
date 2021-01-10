import React from 'react';
import {Badge, Skeleton} from 'antd'
import './SparkleNews.scss'
import logo from '../../../logo.svg'
import {getTabs, getGoNodes, getNews} from "../../../apis";
import {GoNodesAndNews, NewsState} from '../../../types/main/mainPage'
import {DefaultProps} from "../../../types/framework";
import NProgress from 'nprogress'
import moment from 'moment'
import SparkleCard from "../../helper/SparkleCard/SparkleCard";
import {Link} from "react-router-dom";

class SparkleNews extends React.Component<DefaultProps, any> {
    state: NewsState;
    constructor(props: DefaultProps) {
        super(props);
        this.state = {
            tabs: [], // 最上方的切换页
            currentTabId: -1,
            gos: [],
            news: []
        };
        this.changeTab = this.changeTab.bind(this);
    }
    render() {
        let tabs;
        if(!this.state.tabs.length) {
            tabs = <Skeleton paragraph={false} active/>;
        } else {
            tabs = this.state.tabs.map((tab, index) => {
                return <span key={index} onClick={() => this.changeTab(tab.tabId)} className={tab.tabId === this.state.currentTabId ? 'current':'' } >{tab.value}</span>
            })
        }


        let gos;
        if(!this.state.gos.length) {
            gos = <Skeleton paragraph={false} active/>
        } else {
            gos = this.state.gos.map((go, index) => {
                return <a href={go.url} key={index}><span>{go.value}</span></a>
            })
        }


        let news;
        if(!this.state.news.length) {
            news = [];
            for(let ins = 0; ins < 10; ins++) {
                news.push(<Skeleton avatar={true} key={ins} paragraph={{rows: 1}} className="new" active/>)
            }
        } else {
            news = this.state.news.map((nnew, index) => {
                return <div key={index} className={`new ${nnew.topper ? "topper" : ""}`}>
                    <div className="left">
                        <div className="avatar">
                            <img src={logo} alt="#"/>
                        </div>
                        <div className="info">
                            <div className="title">
                                <Link to="/article/123"><span>{nnew.title}</span></Link>
                            </div>
                            <div className="desc">
                                <span className="topic">{nnew.go}</span>
                                <span>{nnew.author}</span>
                                <span>{moment(parseInt(nnew.time)).fromNow()}</span>
                                <span>最后回复来自 <span>{nnew.lastResp}</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="tail">
                        <Badge count={nnew.respNumber} style={{backgroundColor: "lightgray", fontWeight: 'bold', fontSize: '16px'}}/>
                    </div>
                </div>
            })
        }


        return <SparkleCard className={this.props.className + ' news_panel'}>
            <div className="tabs">
                {tabs}
            </div>

            <div className="gos">
                {gos}
            </div>

            <div className="news">
                {news}
            </div>
        </SparkleCard>
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
    changeTab(tabId: number): void {
        NProgress.start();
        this.setState({
            news:[],
            gos:[],
        })
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
                NProgress.done();
            })
        })

    }

    async getData(tabId: string | number): Promise<GoNodesAndNews> {
        let goNodesResp = await getGoNodes(tabId);
        let newsResp = await getNews(tabId);
        return {
            goNodesResp,
            newsResp
        }

    }
}

export default SparkleNews;
