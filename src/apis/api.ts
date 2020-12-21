export function getTabs() {
    return '/api/v1/tabs'
}

export function getGoNodes(tabId : string) {
    return `/api/v1/gos/${tabId}`
}

export function getNews(tabId : string) {
    return `/api/v1/news/${tabId}`
}

