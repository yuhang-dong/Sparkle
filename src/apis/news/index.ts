import axios, {AxiosResponse} from 'axios'

function getTabs(): Promise<AxiosResponse<Array<string>>>{
   return axios.get('/api/v1/tabs');
}

function getGoNodes(tabId: string | number): Promise<AxiosResponse<Array<string>>>{
    return axios.get(`/api/v1/gos/${tabId}`)
}

function getNews(tabId : string | number): Promise<AxiosResponse<Array<string>>> {
    return axios.get(`/api/v1/news/${tabId}`)
}

export  {
    getTabs,
    getGoNodes,
    getNews
}
