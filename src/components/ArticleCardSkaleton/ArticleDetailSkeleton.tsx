import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

export function ArticleDetailSkeleton() {
    return (
        <div>
            <Skeleton variant="rect" width={916} height={400} />
            <Skeleton width="20%" />
            <Skeleton width="40%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
        </div>
    )
}
export default ArticleDetailSkeleton
