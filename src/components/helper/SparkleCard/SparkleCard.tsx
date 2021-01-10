import {DefaultProps} from "../../../types/framework";
import React from "react";
import style from './SparkleCard.module.scss';

function SparkleCard(props: DefaultProps) {

    return <div className={props.className + ` ${style.sparkleCard} card`}>
        {props.children}
    </div>
}

export default SparkleCard;
