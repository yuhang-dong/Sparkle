import SparkleHeader from './components/SparkleHeader';
import SparkleMain from "./components/SparkleMain";
import SparkleFooter from "./components/SparkleFooter";
import './App.css';
import React from "react";
import './apis/mock'
import moment from "moment";
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

React.$moment = moment;
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
