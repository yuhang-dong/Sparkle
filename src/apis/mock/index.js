import Mock from 'mockjs';

Mock.setup({
    timeout: '200-600'
})

Mock.mock( /\/api\/v\d+\/tabs/, () => {
    let ans = [];
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
    let ans = [];
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
    let ans = [];
    let len = Mock.Random.integer(5, 20);
    for(let i = 0; i < len; i++) {
        ans.push({
            title: Mock.Random.csentence(5, 30),
            go: Mock.Random.ctitle(2, 3),
            author: Mock.Random.cname(),
            time: Mock.Random.date('T'),
            lastResp: Mock.Random.cname(),
            resps: Mock.Random.integer(0, 500)
        });
    }

    return ans;
})
