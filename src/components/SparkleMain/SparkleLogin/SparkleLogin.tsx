import {Form, Input, Button, Checkbox, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import React from "react";
import {LoginReq} from "../../../types/main/login";
import {doLogin} from "../../../apis";
import {useHistory} from 'react-router-dom';
import SparkleCard from "../../helper/SparkleCard/SparkleCard";
import {useDispatch} from "react-redux";
import {setUser} from '../../SparkleNavs/SparkleUserDetailOrLogin/SparkleUserDeatilSlice';
import './SparkleLogin.scss';

const SparkleLogin = () => {
    const [form] = Form.useForm();
    const history = useHistory();
    const dispatch = useDispatch();
    async function onLogin(values: LoginReq) {
        //  登录
        let resp = await doLogin(values);
        if(resp.data.code === 200) {
            message.success("登录成功！");
            // 记录登陆成功
            dispatch(setUser(resp.data.data));
            if(values.remember) {
                // 本地记录登录信息，下次访问页面时自动登录
                localStorage.setItem("user", JSON.stringify(resp.data.data));
            }
            history.push('/');
        }

    }

    return (
        <SparkleCard className="login-panel">
            <h1>登录</h1>
            <Form
                name="login"
                initialValues={{remember: true}}
                onFinish={onLogin}
                form={form}
                wrapperCol={{ span: 14 }}
            >
                <Form.Item
                    name="username"
                    rules={[{required: true, message: 'Please input your Username!'}]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="/forgot">
                        忘记密码?
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                    <span> Or </span><a href="/register">注册一个</a>
                </Form.Item>
            </Form>
        </SparkleCard>
    );
};

export default SparkleLogin;
