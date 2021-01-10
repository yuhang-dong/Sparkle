import {PostProps} from "../SparklePost/SparklePost";
import React, {useState} from "react";
import {ArticleComment} from "../../../../types/navs/article";
import SparkleCard from "../../../helper/SparkleCard/SparkleCard";
import style from './SparkleComment.module.scss'
import { Pagination } from 'antd';
import logo from '../../../../logo.svg';

export interface CommentProps extends PostProps {}

function SparkleComment(props: CommentProps) {
    const articleId = props.articleId;

    const [comment, setComment] = useState<ArticleComment>({
        size: 50,
        page: 30,
        comments: [
            {
                commenter: {
                    name: "翠花",
                    userId: "aw3xs"
                },
                time: new Date().getMilliseconds(),
                comment: "好棒，支持！！！"
            },
            {
                commenter: {
                    name: "翠花",
                    userId: "aw3xs"
                },
                time: new Date().getMilliseconds(),
                comment: "好棒，支持！！！"
            },
        ]
    });
    const [currentPage, setCurrentPage] = useState<number>(1);

    const comments = comment.comments?.map((value, index) =>　{
        return <div className={style.comment} key={index}>
            <div className={style.avatar}>
                <img src={logo} alt="#"/>
            </div>
            <div className={style.main}>
                <div className={style.user}>
                    <span>{value.commenter.name}</span>
                    <span>{value.time}</span>
                </div>
                <div className="content">
                    <span>{value.comment}</span>
                </div>
            </div>
        </div>
    });
    return <SparkleCard className={props.className}>
        <div className={style.title}>
            <span>{comment.size} 条回复</span>
        </div>

        <div className="comments">
            <Pagination defaultCurrent={currentPage} total={comment.page} />

            {comments}

        </div>
    </SparkleCard>
}

export default SparkleComment;
