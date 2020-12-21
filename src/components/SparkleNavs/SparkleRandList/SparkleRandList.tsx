import React from 'react'
import {DefaultProps} from "../../../types/framework";
import {Card} from "antd";
import srlStyle from './SparkleRankList.module.scss'
import logo from '../../../logo.svg'
import {RankListState} from '../../../types/navs/rankList'
import {getRankList} from "../../../apis";

class SparkleRandList extends React.Component<DefaultProps, any> {
    state: RankListState;
    constructor(props: DefaultProps) {
        super(props);
        this.state = {
            rankList: []
        }
    }
    render() {
        const rank = this.state.rankList.map((rank, index) => {
            return  <div className={srlStyle.rank} key={index}>
                <div className={srlStyle.head}>
                    <img src={logo} alt="#"/>
                </div>

                <div className={srlStyle.title}>
                    <span>{rank.title}</span>
                </div>
            </div>
        })
        return <Card className={this.props.className + ` ${srlStyle.srl}`} title={"今日热议主题"}>
            {rank}
        </Card>;
    }
    componentDidMount() {
        getRankList().then(resp => {
            if(resp.status === 200) {
                this.setState({
                    rankList: resp.data
                })
            }
        })
    }
}

export default SparkleRandList;
