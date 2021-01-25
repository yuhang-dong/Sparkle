import SparkleHeader from './components/SparkleHeader/SparkleHeader';
import SparkleMain from "./components/SparkleMain/SparkleMain";
import SparkleFooter from "./components/SparkleFooter/SparkleFooter";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import React from "react";
import './apis/mock'
import 'nprogress/nprogress.css'


function App() {
    return (<Router basename="/Sparkle">
            <SparkleHeader/>
            <SparkleMain/>
            <SparkleFooter/>
            </Router>
    );
}


export default App;
