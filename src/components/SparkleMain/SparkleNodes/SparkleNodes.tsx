import React, {useEffect, useState} from 'react';
import SparkleCard from "../../helper/SparkleCard/SparkleCard";
import style from './SparkleNodes.module.scss';
import {getNodes} from "../../../apis/nav/nodes";
import {Node} from "../../../types/navs/nodes";
import {useLocation} from "react-router-dom";
import SparkleBreadcrumb from "../../helper/SparkleBreadcrumb/SparkleBreadcrumb";

function SparkleNodes() {
    const [nodes, setNode] = useState<Node[]>([]);
    const { pathname } = useLocation();
    useEffect( () => {
        const nodes = getNodes();
        nodes.then(resp => {
            if(resp.status === 200) {
                setNode(resp.data);
            }
        })
    }, [pathname]);

    const ans = nodes.map((value, index) => {
        return <div className={style.row} key={index}>
                <span className={style.title}>
                    {value.name}
                </span>
            <ul>
                {value.children?.map((value, index) => <li key={index}>{value.name}</li>)}
            </ul>
        </div>
    })

    return <SparkleCard>
        <div className={style.head}>
            <span>
                <SparkleBreadcrumb separator={">"} items={["Sparkle", "节点导航"]}/>
            </span>

            <span>
                浏览全部节点
            </span>
        </div>
        <div className={style.body}>
            {ans}
        </div>
    </SparkleCard>;
}

export default SparkleNodes;
