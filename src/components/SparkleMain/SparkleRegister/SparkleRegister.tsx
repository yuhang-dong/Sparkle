import React from 'react';
import {Button, Form, Input, message, Tooltip,} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import './SparkleRegister.scss';
import {doRegister, doUniqueEmail} from "../../../apis";
import {RegisterReq} from "../../../types/main/register";
import SparkleCard from "../../helper/SparkleCard/SparkleCard";
import {setUser} from "../../SparkleNavs/SparkleUserDetailOrLogin/SparkleUserDeatilSlice";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import _ from 'lodash';


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

    const history = useHistory();
    const dispatch = useDispatch();
    async function onRegister(user: RegisterReq) {
        let resp = await doRegister(user);

        if(resp.data.code === 200) {
            message.success("注册成功");

            dispatch(setUser(resp.data.data));
            history.push('/');
        } else {
            message.error("注册失败，检查邮箱、密码、用户名是否满足规范");
        }
    }
    const debounceUniqueEmail = _.debounce(doUniqueEmail, 1300);
    async function uniqueEmail(email: string) {

        let resp = await debounceUniqueEmail(email);
        return resp?.data.data.unique;
    }

    return (
        <SparkleCard className="register-panel">
            <h1>注册</h1>
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onRegister}
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="邮箱"
                hasFeedback
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                    ({getFieldValue}) => ({
                        async validator(rule, value) {
                            const unique = await uniqueEmail(value);
                            if(unique === undefined || unique) {
                                return Promise.resolve();
                            }
                            return Promise.reject('邮箱已被占用');
                        },
                    }),
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
                name="username"
                label={
                    <span>
        用户名&nbsp;
                        <Tooltip title="What do you want others to call you?">
        <QuestionCircleOutlined/>
        </Tooltip>
        </span>
                }
                hasFeedback
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
