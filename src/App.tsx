import SparkleHeader from './components/SparkleHeader/SparkleHeader';
import SparkleMain from "./components/SparkleMain/SparkleMain";
import SparkleFooter from "./components/SparkleFooter/SparkleFooter";
import {HashRouter as Router} from "react-router-dom";
import './App.css';
import React from "react";
import './apis/mock'
import 'nprogress/nprogress.css'
import Provider from "./store/store";
if(navigator?.userAgent?.toLowerCase().indexOf("firefox") > -1) {
    document.body.ondrop = function(event: DragEvent): void {
        event.stopPropagation();
        event.preventDefault();
    }
}

function App() {
    return (
        <Provider>
        <Router>
            <SparkleHeader/>
            <SparkleMain/>
            <SparkleFooter/>
            </Router>
        </Provider>
    );
}


export default App;
