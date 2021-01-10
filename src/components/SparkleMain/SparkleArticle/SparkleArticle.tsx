import {useParams} from 'react-router-dom';

import SparklePost from "./SparklePost/SparklePost";
import SparkleComment from "./SparkleComment/SparkleComment";
import React from "react";

function SparkleArticle() {
    const {articleId} = useParams<{ articleId: string }>();

    return <>
        <SparklePost articleId={articleId}/>

        <SparkleComment articleId={articleId}/>
    </>;
}

export default SparkleArticle;
