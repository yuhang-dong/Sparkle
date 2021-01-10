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

const SparkleRegister = () => {
    const [form] = Form.useForm();

    async function onRegister(user: RegisterReq) {
        let resp = await doRegister(user);

        if(resp.status === 200 && resp.data.code === 200) {
            message.success("注册成功");
        }
    }



    return (
        <SparkleCard className="register-panel">
            <h1>注册</h1>
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onRegister}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="邮箱"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                name="password"
                label="密码"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item
                name="confirm"
                label="重复密码"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({getFieldValue}) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password/>
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
                <Input/>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    注册
                </Button>
            </Form.Item>
        </Form>
        </SparkleCard>
    );
};

export default SparkleRegister;
