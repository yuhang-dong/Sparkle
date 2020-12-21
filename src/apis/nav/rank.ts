import axios, {AxiosResponse} from 'axios'
import {RankList} from "../../types/navs/rankList";

export function getRankList():  Promise<AxiosResponse<RankList[]>> {
    return axios.get('/api/v1/rank')
}
