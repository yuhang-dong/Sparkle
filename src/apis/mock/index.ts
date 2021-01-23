import Mock from 'mockjs';
import {TabNode, GoNode, NewNode} from "../../types/main/mainPage";
import {RankList} from '../../types/navs/rankList'
import {Resp} from "../../types/base/HTTP";
import {LoginRespData} from "../../types/main/login";
import {RegisterRes} from "../../types/main/register";
import {Node} from "../../types/navs/nodes";

Mock.setup({
    timeout: '200-600'
})

// 获取最上面的tabs
Mock.mock( /\/api\/v\d+\/tabs/, () => {
    let ans: TabNode[] = [];
    let len = Mock.Random.integer(5, 20);
    for(let i = 0; i < len; i++) {
        ans.push({
            value: Mock.Random.ctitle(2, 3),
            // url: `/${Mock.Random.word(3,6)}`,
            tabId: i
        });
    }

    return ans;
})

// 获取tabs下相关的gos
Mock.mock( /\/api\/v\d+\/gos\/.*/, () => {
    let ans: GoNode[] = [];
    let len = Mock.Random.integer(5, 20);
    for(let i = 0; i < len; i++) {
        ans.push({
            value: Mock.Random.ctitle(2, 3),
            url: `/${Mock.Random.word(3,6)}`,
        });
    }

    return ans;
})

// 获取tabs对应的news
Mock.mock( /\/api\/v\d+\/news\/.*/, () => {
    let ans:NewNode[] = [];
    for(let i = 0; i < 20; i++) {
        ans.push({
            title: Mock.Random.csentence(5, 30),
            go: Mock.Random.ctitle(2, 3),
            author: Mock.Random.cname(),
            time: Mock.Random.date('T'),
            lastResp: Mock.Random.cname(),
            respNumber: Mock.Random.integer(0, 500),
            topper: i < 3,
        });
    }

    return ans;
})

// 获取全站的rank
Mock.mock( /\/api\/v\d+\/rank/, () => {
    let ans: RankList[] = [];
    let len = Mock.Random.integer(5, 20);
    for(let i = 0; i < len; i++) {
        ans.push({
            authorAvatar: Mock.Random.cname(),
            authorUrl: Mock.Random.cname(),
            title: Mock.Random.csentence(5, 30),
            url: Mock.Random.cname()

        });
    }

    return ans;
})

// 获取节点导航
Mock.mock( /\/api\/v\d+\/nodes/, () => {
    let ans: Node[] = [];
    let len = Mock.Random.integer(5, 20);
    for(let i = 0; i < len; i++) {
        let children: Node[] = [];
        let l = Mock.Random.integer(2, 20);
        for(let j = 0; j < l; j++) {
            children.push({
                nodeId: '13',
                name: Mock.Random.ctitle(2, 6),
            });
        }
        ans.push({
            nodeId: '113',
            name: Mock.Random.ctitle(2, 3),
            children: children
        });
    }

    return ans;
})



///---------------------------用户模块API-----------------------------///
// 登录
Mock.mock(/\/api\/v\d+\/user\/login/, 'post', () => {
    let ans: Resp<LoginRespData> = {
        code: 200,
        data:{
            _id: '123212232',
            username: 'Nike',
            nodeCollectionSize: 123123,
            specialFollowSize: 111,
            topicCollectionSize: 192283
        }
    }

    return ans;
})

// 注册
Mock.mock(/\/api\/v\d+\/user\/register/, 'post', () => {
    let ans: Resp<RegisterRes> = {
        code: 200,
        data:{
            _id: '123212232',
            username: 'Nike',
            nodeCollectionSize: 123123,
            specialFollowSize: 111,
            topicCollectionSize: 192283
        }
    }

    return ans;
})
