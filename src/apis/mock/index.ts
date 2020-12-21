// @ts-ignore
import Mock from 'mockjs';
import {TabNode, GoNode, NewNode} from "../../types";

Mock.setup({
    timeout: '200-600'
})

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
