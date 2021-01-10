import React from 'react'
import {DefaultProps} from "../../../types/framework";
import srlStyle from './SparkleRankList.module.scss'
import logo from '../../../logo.svg'
import {RankListState} from '../../../types/navs/rankList'
import {getRankList} from "../../../apis";
import SparkleCard from "../../helper/SparkleCard/SparkleCard";

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
        return <SparkleCard className={this.props.className + ` ${srlStyle.srl}`}>
            <div className={srlStyle.title}>
                <h2>今日热议主题</h2>
            </div>
            {rank}
        </SparkleCard>;
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
