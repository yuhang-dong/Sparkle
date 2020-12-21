import React from 'react';
import './SparkleMain.scss'
import SparkleNews from '../SparkleNews'
import {Card} from "antd";

class SparkleMain extends React.Component {
    render() {
        return <main>
            <div className="container">
                <div className="main_wrapper">
                    <div className="middle">
                        <SparkleNews className="card"></SparkleNews>
                        <Card className="card"></Card>
                    </div>

                    <div className="right">
                        <Card className="card"></Card>
                        <Card className="card"></Card>
                        <Card className="card"></Card>
                        <Card className="card"></Card>
                    </div>
                </div>


            </div>
        </main>

    }
}

export default SparkleMain;
