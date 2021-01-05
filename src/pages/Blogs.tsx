import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import useDatas from 'src/hooks/useFetchSpaceNewsAPI'
export function Blogs(props: RouteComponentProps) {
    const blogs = useDatas('blogs', { _limit: 10 })
    return (
        <>
            Blogs
            <hr />
            <span>{JSON.stringify(blogs)}</span>
        </>
    )
}

export default Blogs
