import {AxiosResponse} from "axios";

export interface TabNode {
    tabId: number,
    value: string
}
export interface GoNodesAndNews {
    goNodesResp: AxiosResponse<Array<string>>,
    newsResp: AxiosResponse<Array<string>>
}

export interface GoNode {
    value: string,
    url: string
}

export interface NewNode {
    title: string,
    go: string,
    author: string,
    time: string,
    lastResp: string,
    respNumber: number
}

export interface NewsState {
    tabs: TabNode[],
    currentTabId: number,
    gos: GoNode[],
    news: NewNode[],
}
