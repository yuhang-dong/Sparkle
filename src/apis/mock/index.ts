import Mock from 'mockjs';
import {TabNode, GoNode, NewNode} from "../../types/mainPage";
import {RankList} from '../../types/navs/rankList'

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
    let len = Mock.Random.integer(5, 20);
    for(let i = 0; i < len; i++) {
        ans.push({
            title: Mock.Random.csentence(5, 30),
            go: Mock.Random.ctitle(2, 3),
            author: Mock.Random.cname(),
            time: Mock.Random.date('T'),
            lastResp: Mock.Random.cname(),
            respNumber: Mock.Random.integer(0, 500)
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
