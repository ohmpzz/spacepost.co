import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { scale, rhythm } from 'src/utils'
import { SpaceNews, API } from 'src/models'
import kebabCase from 'lodash.kebabcase'
const Article = styled.article`
    &:not(:first-of-type) {
        margin-top: ${rhythm(1)} !important;
    }
`

const Title = styled.h2`
    font-size: ${scale(0.5 / 5).fontSize};
    line-height: ${scale(0.5 / 5).lineHeight};
    letter-spacing: 1px;
    text-decoration: none;
    color: hsl(0, 0%, 20%);
    margin-bottom: ${rhythm(0.5)};
`

interface AsideProps {
    article: SpaceNews
    api: API
}

export function Aside(props: AsideProps) {
    const { article } = props
    console.log({ props })
    const slug = `/${props?.api}/${kebabCase(`${article.title}`)}-${article.id}`
    return (
        <Article>
            <Grid
                container
                spacing={2}
                style={{
                    borderBottom: '1px solid hsl(0, 0%, 80%)',
                }}
            >
                <Grid item lg={8} md={8} sm={8} xs={8}>
                    <Link to={slug} style={{ textDecoration: 'none' }}>
                        <Title>{article?.title}</Title>
                        <p style={{ color: 'hsl(0,0%,50%)', ...scale(-2 / 5) }}>
                            By {article.newsSite}
                        </p>
                    </Link>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <Link to={slug}>
                        <img
                            src={article?.imageUrl}
                            alt={article?.title}
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center center',
                                width: '60px',
                                height: '60px',
                            }}
                        />
                    </Link>
                </Grid>
            </Grid>
        </Article>
    )
}

export default Aside
