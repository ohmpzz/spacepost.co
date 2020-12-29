import React from 'react'
import styled from '@emotion/styled'

import { rhythm, scale } from 'src/utils'

const TaglineDecoration = styled.div`
    text-align: center;
    &:before {
        position: relative;
        background-color: #111;
        height: 1px;
        display: block;
        top: 0.75rem;
        z-index: -1;
        content: '';
    }
`

export function Logo() {
    return (
        <>
            <h1 style={{ textAlign: 'center', marginBottom: rhythm(2 / 5) }}>
                The Space Post
            </h1>
            <TaglineDecoration style={{ ...scale(1.25 / 5) }}>
                <span
                    style={{
                        display: 'inline-block',
                        backgroundColor: 'white',
                        padding: `0px ${rhythm(1)}`,
                        marginBottom: rhythm(1),
                    }}
                >
                    Rocket Lover
                </span>
            </TaglineDecoration>
        </>
    )
}

export default Logo
