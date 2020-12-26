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
    featured: string
    title: string
    url: string
    imageUrl: string
    newsSite: string
    summary: string
    publishedAt: string
    launches: Launch[]
    events: Event[]
}
