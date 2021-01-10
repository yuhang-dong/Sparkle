import React from 'react';
import './SparkleMain.scss'
import SparkleRandList from "../SparkleNavs/SparkleRandList/SparkleRandList";
import SparkleIndex from "./SparkleIndex/SparkleIndex";
import SparkleLogin from './SparkleLogin/SparkleLogin'
import {Card} from "antd";
import {Switch, Route } from 'react-router-dom';
import SparkleRegister from "./SparkleRegister/SparkleRegister";
import SparkleUserDetailOrLogin from "../SparkleNavs/SparkleUserDetailOrLogin/SparkleUserDetailOrLogin";
import SparkleArticle from "./SparkleArticle/SparkleArticle";
import SparkleScrollToTop from "../helper/SparkleScrollToTop";
import SparkleCreate from "./SparkleCreate/SparkleCreate";

class SparkleMain extends React.Component {
    render() {
        return <main>
            <div className="container">
                <div className="main_wrapper">
                    <div className="middle">
                        <Switch>
                            <Route path='/login' >
                                <SparkleScrollToTop />
                                <SparkleLogin/>
                            </Route>
                            <Route path="/register">
                                <SparkleScrollToTop />
                                <SparkleRegister/>
                            </Route>
                            <Route path="/article/:articleId">
                                <SparkleScrollToTop />
                                <SparkleArticle/>
                            </Route>
                            <Route path="/create">
                                <SparkleScrollToTop />
                                <SparkleCreate/>
                            </Route>
                            <Route path="/">
                                <SparkleScrollToTop />
                                <SparkleIndex/>
                            </Route>
                        </Switch>
                    </div>

                    <div className="right">
                        <SparkleUserDetailOrLogin/>
                        <SparkleRandList/>
                        <Card/>
                        <Card/>
                    </div>
                </div>


        </div>
        </main>
    }
}

export default SparkleMain;
