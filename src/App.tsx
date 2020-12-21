import SparkleHeader from './components/SparkleHeader';
import SparkleMain from "./components/SparkleMain";
import SparkleFooter from "./components/SparkleFooter";
import './App.css';
import React from "react";
import './apis/mock'
import moment from "moment";
import 'nprogress/nprogress.css'
// @ts-ignore
import NProgress from 'nprogress'
// @ts-ignore
React.$moment = moment;
// @ts-ignore
React.$nprogress = NProgress;

function App() {
    return (
        <>
            <SparkleHeader/>
            <SparkleMain/>
            <SparkleFooter/>
        </>
    );
}


export default App;
