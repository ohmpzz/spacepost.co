import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

export function ArticleCardSkeleton() {
    return (
        <div>
            <Skeleton variant="rect" width={296} height={190} />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="60%" />
        </div>
    )
}
export default ArticleCardSkeleton
