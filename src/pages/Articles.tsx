import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import useDatas from 'src/hooks/useFetchSpaceNewsAPI'

export function Articles(props: RouteComponentProps) {
    const aricles = useDatas('articles')
    return (
        <>
            Articles
            <hr />
            <span>{JSON.stringify(aricles)}</span>
        </>
    )
}

export default Articles
