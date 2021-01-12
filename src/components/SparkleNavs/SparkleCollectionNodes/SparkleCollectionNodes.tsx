import React from 'react';
import SparkleCard from "../../helper/SparkleCard/SparkleCard";
import style from './SparkleCollectionNodes.module.scss';

function SparkleCollectionNodes() {

    const containerRef = React.createRef<HTMLDivElement>();
    function mouseDown(e:  React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault();
        e.stopPropagation();
        const container = containerRef.current;
        const target = e.currentTarget;


        // 创建一个新的空白节点,放在目标节点的后一个节点的前面
        const black = document.createElement("div");
        container?.insertBefore(black, target.nextSibling);

        const singleHeight = black.offsetHeight;
        // 更改目标节点为absolute
        target.style.position = 'absolute';
        target.style.top = target.offsetTop + 'px';
        target.style.left = target.offsetLeft + 'px';
        target.style.zIndex = '10000';

        const referenceX = e.clientX - target.offsetLeft;
        const referenceY = e.clientY - target.offsetTop;
        target.onmousemove = function(e: MouseEvent) {
            e.stopPropagation();
            e.preventDefault();
            const t = e.target;
            const heightY = e.clientY - referenceY;
            const heightX = e.clientX - referenceX;
            const n = Math.round(heightY / singleHeight);
            console.log(n);
            if(heightY > 0 && n > 0) {
                container?.insertBefore(black, container?.children[n + 1]);
            } else {
                container?.insertBefore(black, container?.children[n]);
            }


            target.style.top = heightY + 'px';
            target.style.left = heightX + 'px';
        }

        target.onmouseup = function(e: MouseEvent) {
            e.stopPropagation();
            e.preventDefault();
            container?.insertBefore(target, black);
            target.removeAttribute("style");
            container?.removeChild(black);
            target.onmousemove = null;
        }
    }

    const nodesValue = ["node1", "node2"];
    const nodes = nodesValue.map((node, index) => {
        return <div onMouseDown={mouseDown} key={index}>
            <span>{node}</span>
        </div>
    })

    return <SparkleCard>
        <div className={style.title}>
            <h2>我的收藏</h2>
        </div>
        <div className={style.nodes} ref={containerRef}>
            {nodes}
        </div>
    </SparkleCard>
}

export default SparkleCollectionNodes;
