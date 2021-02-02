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
import SparkleCollectionNodes from "../SparkleNavs/SparkleCollectionNodes/SparkleCollectionNodes";

class SparkleMain extends React.Component {
    render() {
        return <main>
            <div className="container">
                <div className="main_wrapper">
                    <div className="middle">
                        <SparkleScrollToTop />
                        <Switch>
                            <Route path='/login' >
                                <SparkleLogin/>
                            </Route>
                            <Route path="/register">
                                <SparkleRegister/>
                            </Route>
                            <Route path="/article/:articleId">
                                <SparkleArticle/>
                            </Route>
                            <Route path="/create">
                                <SparkleCreate/>
                            </Route>
                            <Route path="/">
                                <SparkleIndex/>
                            </Route>
                        </Switch>
                    </div>

                    <div className="right">
                        <SparkleUserDetailOrLogin/>
                        <SparkleCollectionNodes/>
                        <SparkleRandList/>
                        <Card/>
                    </div>
                </div>


        </div>
        </main>
    }
}

export default SparkleMain;
