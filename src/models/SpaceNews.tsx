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

export type API = 'articles' | 'blogs' | 'reports'

export const spaceNewsMock: SpaceNews[] = [
    {
        events: [],
        featured: false,
        id: '5ff0bd5c8e9337001ca8938b',
        imageUrl:
            'https://www.nasaspaceflight.com/wp-content/uploads/2021/01/DSC_6792-min.jpg',
        launches: [],
        newsSite: 'NASA Spaceflight',
        publishedAt: '2021-01-02T18:30:55.000Z',
        summary:
            'In their most active year to date, SpaceX reached a number of reuse milestones, further pursuing their goal of rapid reuse. SpaceX flew boosters on fifth, sixth, and seventh flights for the first time this year, and also significantly decreased the turnaround time of boosters, with the quickest turnaround of just under 51 days. Not only is this a record for SpaceX, it also beats Space Shuttle Atlantis’ fastest turnaround time, which was 54 days. Atlantis held the world record for shortest turnaround time of an orbital class vehicle for 35 years.',
        title:
            'SpaceX sets reuse records in 2020, looks ahead to even more ambitous 2021',
        updatedAt: '2021-01-02T18:37:16.193Z',
        url:
            'https://www.nasaspaceflight.com/2021/01/spacex-reuse-records-2020-ambitious-2021/',
    },
    {
        events: [],
        featured: false,
        id: '5fefb6d68e9337001ca8938a',
        imageUrl:
            'https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2021/01/139602643_16083580118751n.jpg',
        launches: [],
        newsSite: 'Spaceflight Now',
        publishedAt: '2021-01-01T23:57:10.000Z',
        summary:
            'Chinese officials say they plan to share a portion of the nearly 4 pounds of lunar material returned by the Chang’e 5 mission with other countries, but an allocation for U.S. scientists will hinge on a change in U.S. policy restricting cooperation between NASA and China’s space program.',
        title: 'Chinese mission returned nearly 4 pounds of lunar samples',
        updatedAt: '2021-01-01T23:57:10.590Z',
        url:
            'https://spaceflightnow.com/2021/01/01/chinese-mission-returned-nearly-4-pounds-of-lunar-samples/',
    },
]
