import React from "react";
import SparkleNews from "../SparkleNews/SparkleNews";
import SparkleCard from "../../helper/SparkleCard/SparkleCard";
import SparkleNodes from "../SparkleNodes/SparkleNodes";

class SparkleIndex extends React.Component<any, any> {
    render() {
        return <>
            <SparkleNews />
            <SparkleNodes />
        </>
    }
}

export default SparkleIndex;
