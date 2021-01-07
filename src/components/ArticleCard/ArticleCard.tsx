import React from 'react'
import { SpaceNews, API } from 'src/models'

import Verticle from './Verticle'
import Aside from './Aside'

interface ArticleCardProps {
    article: SpaceNews
    api: API
    variant?: 'verticle' | 'aside'
}

export function ArticleCard(props: ArticleCardProps) {
    const { variant, ...newProps } = props

    switch (variant) {
        case 'aside':
            return <Aside {...newProps} />
        case 'verticle':
            return <Verticle {...newProps} />
        default:
            return <Verticle {...newProps} />
    }
}
