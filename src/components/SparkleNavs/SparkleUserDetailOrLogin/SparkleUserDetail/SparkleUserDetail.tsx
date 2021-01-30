import {FileTextOutlined} from '@ant-design/icons'
import logo from '../../../../logo.svg'
import {DefaultProps} from "../../../../types/framework";
import style from './SparkleUserDetail.module.scss'
import SparkleCard from "../../../helper/SparkleCard/SparkleCard";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AllContext} from "../../../../store/store";

function SparkleUserDetail(props: DefaultProps) {
    const {user: userDetail} = useContext(AllContext);
    return <SparkleCard className={props.className + ` ${style.ud}`}>
        <div className={style.head}>
            <img src={logo} alt=""/>
            <span>{userDetail.username}</span>
            {/*    todo: 夜间模式*/}
        </div>
        <div className={style.middle}>
            <div className={style.block}>
                <span>{userDetail.nodeCollectionSize ?? 0}</span>
                <span>节点收藏</span>
            </div>

            <div className={style.block}>
                <span>{userDetail.topicCollectionSize ?? 0}</span>
                <span>节点收藏</span>
            </div>

            <div className={style.block}>
                <span>{userDetail.specialFollowSize ?? 0}</span>
                <span>特别关注</span>
            </div>
        </div>
        <div className={style.newTopic}>
            <Link to="/create"><FileTextOutlined/>
            <span>创作新主题</span></Link>
        </div>
        <div className={style.info}>
            <div className="unread">
                <span>0条未读提醒</span>
            </div>
        </div>
    </SparkleCard>
}


export default SparkleUserDetail;
