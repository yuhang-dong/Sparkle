import axios from 'axios'

function getTabs() {
   return axios.get('/api/v1/tabs');
}

function getGoNodes(tabId) {
    return axios.get(`/api/v1/gos/${tabId}`)
}

function getNews(tabId) {
    return axios.get(`/api/v1/news/${tabId}`)
}

export  {
    getTabs,
    getGoNodes,
    getNews
}
