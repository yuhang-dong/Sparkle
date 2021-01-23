import React, {ChangeEvent, ForwardedRef, useEffect, useState} from 'react';
import SparkleCard from "../../helper/SparkleCard/SparkleCard";
import {Input, Select, Button } from 'antd';
import SparkleBreadcrumb from "../../helper/SparkleBreadcrumb/SparkleBreadcrumb";
import style from './SparkleCreate.module.scss';
import SparkleMarkdownEditor from "../../helper/SparkleMarkdownEditor/SparkleMarkdownEditor";
import {SelectValue} from "antd/es/select";


function SparkleCreate() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [topic, setTopic] = useState('');
    const {Option} = Select;

    function onTitleChange(title: ChangeEvent<HTMLInputElement>) {
        setTitle(title.target.value);
    }

    function onContentChange(content: string) {
        setContent(content);
        console.log(content);
    }

    function onTopicChange(value: SelectValue){
        setTopic(value as string)
    }

    return <SparkleCard className={style.create}>
        <div className={style.title}>
            <SparkleBreadcrumb items={["Sparkle", "新主题"]} />
        </div>

        <Input placeholder="主题" onChange={onTitleChange}/>

        <div className={style.editor}>
            <SparkleMarkdownEditor change={onContentChange} />
        </div>
        <div className={style.submit}>
                <Select
                    showSearch
                    style={{ width: 200, border: '1px solid rgba(0,0,0,0.5)' }}
                    placeholder="选择一个节点"
                    onChange={onTopicChange}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            <Button type="primary">发布主题</Button>
        </div>

    </SparkleCard>

}

export default SparkleCreate;
