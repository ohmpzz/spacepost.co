import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from 'src/utils'

const Decoration = styled.div`
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

export function TitleDecoration({ children }: { children: React.ReactNode }) {
    return (
        <Decoration>
            <span
                style={{
                    display: 'inline-block',
                    backgroundColor: 'white',
                    padding: `0px ${rhythm(1)}`,
                    marginBottom: rhythm(1),
                }}
            >
                {children}
            </span>
        </Decoration>
    )
}

export default TitleDecoration
