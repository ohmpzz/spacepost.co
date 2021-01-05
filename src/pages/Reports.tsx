import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import useDatas from 'src/hooks/useFetchSpaceNewsAPI'
import { useLocation } from 'react-router-dom'
export function Reports(props: RouteComponentProps) {
    const reports = useDatas('reports')
    return (
        <>
            Reports
            <hr />
            <span>{JSON.stringify(reports)}</span>
        </>
    )
}

export default Reports
