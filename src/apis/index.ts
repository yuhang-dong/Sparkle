import {getTabs, getGoNodes, getNews} from "./news";
import {getRankList} from "./nav/rank";
import {doRegister} from "./user/register";
import {doLogin} from "./user/login";
import axios from 'axios';
import {message} from "antd";
axios.defaults.withCredentials = true; // 允许携带cookie
axios.interceptors.response.use((resp) => {
    return resp;
}, (error) => {
    message.error("请求错误！");
    console.log(error);
    return Promise.reject(error);
})


export {
    getTabs, getGoNodes, getNews, getRankList, doRegister, doLogin
}
