import React, {ForwardedRef, useEffect, useState} from 'react';
import SparkleCard from "../../helper/SparkleCard/SparkleCard";
import {Input, Select, Button } from 'antd';
import SparkleBreadcrumb from "../../helper/SparkleBreadcrumb/SparkleBreadcrumb";
import style from './SparkleCreate.module.scss';
import SparkleMarkdownEditor from "../../helper/SparkleMarkdownEditor/SparkleMarkdownEditor";


function SparkleCreate() {
    const [value, setValue] = useState('');
    const {Option} = Select;

    function onChange() {

    }

    return <SparkleCard className={style.create}>
        <div className={style.title}>
            <SparkleBreadcrumb items={["Sparkle", "新主题"]} />
        </div>

        <Input placeholder="主题" />

        <div className={style.editor}>
            <SparkleMarkdownEditor/>
        </div>
        <div className={style.submit}>
                <Select
                    showSearch
                    style={{ width: 200, border: '1px solid rgba(0,0,0,0.5)' }}
                    placeholder="选择一个节点"
                    onChange={onChange}
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
