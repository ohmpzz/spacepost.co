export interface Launch {
    id: string
    provider: string
}

export interface Event {
    id: string
    provider: string
}

export interface SpaceNews {
    id: string
    featured: boolean
    title: string
    url: string
    imageUrl: string
    newsSite: string
    summary: string
    publishedAt: string
    launches: Launch[]
    events: Event[]
    updatedAt: string
}
export type Sort = keyof SpaceNews

export interface Option {
    id?: string
    _limit?: number
    _sort?: Sort
}

export type API = 'articles' | 'blogs' | 'reports'
