import React from 'react';
import {Button, Form, Input, message, Tooltip,} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import './SparkleRegister.scss';
import {doRegister} from "../../../apis";
import {RegisterReq} from "../../../types/main/register";
import SparkleCard from "../../helper/SparkleCard/SparkleCard";

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const SparkleUser = () => {
    const [form] = Form.useForm();

    return (
        <SparkleCard className="register-panel">
            <h1>注册</h1>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="邮箱"
                >
                    <Input/>
                </Form.Item>


                <Form.Item
                    name="nickname"
                    label={
                        <span>
        用户名&nbsp;
                            <Tooltip title="What do you want others to call you?">
        <QuestionCircleOutlined/>
        </Tooltip>
        </span>
                    }
                    rules={[
                        {
                            required: true,
                            message: 'Please input your nickname!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input disabled/>
                </Form.Item>

            </Form>
        </SparkleCard>
    );
};

export default SparkleUser;
