import React from 'react';
import SparkleCard from "../../helper/SparkleCard/SparkleCard";
import style from './SparkleCollectionNodes.module.scss';

function SparkleCollectionNodes() {

    const containerRef = React.createRef<HTMLDivElement>();
    let dragging: EventTarget & HTMLDivElement;
    let container: EventTarget & HTMLDivElement;
    function _index(el: Element | null) {
        // TODO 较为费时  待优化
        let index = 0;

        if (!el || !el.parentNode) {
            return -1;
        }

        while (el && (el = el.previousElementSibling)) {
            //console.log(el);
            index++;
        }

        return index;
    }
    // 使用事件委托机制， 将内部的事件委托至父元素container
    function dragStart(event: React.DragEvent<HTMLDivElement>) {
        dragging = event.currentTarget as EventTarget & HTMLDivElement;
        // event.dataTransfer.setData("nodes", dragging.innerText);
        containerRef.current &&( container =  containerRef.current);
    }

    function dragOver(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault(); // 代表元素可以被拖动
        const target = event.currentTarget as EventTarget & HTMLDivElement;
        if(target !== container) {
            if(target !== dragging) {
                const [draggingIndex, targetIndex] = [dragging.getAttribute("data-index") , target.getAttribute("data-index")];
                if(draggingIndex && targetIndex) {
                    if (draggingIndex < targetIndex) {
                        target.parentNode?.insertBefore(dragging, target.nextSibling);
                    } else {
                        target.parentNode?.insertBefore(dragging, target);
                    }
                    target.setAttribute("data-index", draggingIndex);
                    dragging.setAttribute("data-index", targetIndex);
                }

            }
        }
    }


    const nodesValue = ["node1", "node2"];
    const nodes = nodesValue.map((node, index) => {
        return <div key={index} draggable="true" onDragStart={dragStart}  onDragOver={dragOver} data-index={index}>
            <span><a href="#" >{node}</a></span>
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
