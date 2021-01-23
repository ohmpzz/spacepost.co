import React from 'react'
import Card from './Card'
import Content from './Content'

interface ArticleCardSkeletonProps {
    variant?: 'card' | 'content'
}

export function ArticleCardSkeleton({ variant }: ArticleCardSkeletonProps) {
    switch (variant) {
        case 'content':
            return <Content />
        case 'card':
        default:
            return <Card />
    }
}
export default ArticleCardSkeleton
