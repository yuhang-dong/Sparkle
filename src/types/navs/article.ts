export interface Article {
    articleId: string | null,
    posterId: string | null,
    post: {
        title: string | null,
        clicked?: number,
        content: string,
        like?: number,
        unlike?: number,
        time?: number,
    },
}

export interface User {
    name: string | null,
    userId: string | null,
}

export interface Comment {
    commenter: User,
    time: number,
    comment: string
}

export interface ArticleComment {
    size: number,
    page: number,
    comments?: Comment[],
}
