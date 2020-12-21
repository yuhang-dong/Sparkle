import SparkleHeader from './components/SparkleHeader/SparkleHeader';
import SparkleMain from "./components/SparkleMain/SparkleMain";
import SparkleFooter from "./components/SparkleFooter/SparkleFooter";
import './App.css';
import React from "react";
import './apis/mock'
import 'nprogress/nprogress.css'


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
