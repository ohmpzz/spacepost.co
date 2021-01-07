import React, { useState, useEffect } from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { Container, Grid } from '@material-ui/core'
import { TitleDecoration, ArticleCard } from 'src/components'
import { getIdFromSlug, scale, rhythm } from 'src/utils'
import { format } from 'date-fns'
import useFetchSpaceNewsAPI from 'src/hooks/useFetchSpaceNewsAPI'
import { API, spaceNewsMock, SpaceNews } from 'src/models'

const categoryFont = scale(0 / 5)

const Category = styled.a`
    text-decoration: none;
    color: blue;
    font-weight: 600;
    font-size: ${categoryFont.fontSize};
    line-height: ${categoryFont.lineHeight};
    text-transform: capitalize;
`

const CoverImg = styled.img`
    object-fit: cover;
    object-position: center center;
    height: 400px;
    width: 100%;
`

// todo ดึงข้อมูลตาม id และ api
export function ArticleDetail(props: RouteComponentProps) {
    const params = useParams<{ id: string; api: API }>()
    console.log({ params })
    const id = getIdFromSlug(params?.id)
    console.log({ id })
    const news = useFetchSpaceNewsAPI<SpaceNews>(params.api, { id })
    console.log({ news })
    // const [news, setNews] = useState<SpaceNews | null>(null)
    // useEffect(() => {
    //     const spaceNewsMap = new Map()
    //     spaceNewsMock.forEach((news) => {
    //         spaceNewsMap.set(news.id, news)
    //     })
    //     if (spaceNewsMap.has(id)) {
    //         setNews(spaceNewsMap.get(id))
    //     }
    // }, [id])
    return (
        <Container maxWidth="lg">
            <Category>{params.api}</Category>
            <h1
                style={{
                    ...scale(1.5),
                    borderBottom: '1px solid hsl(0,0%,80%)',
                    paddingBottom: rhythm(1),
                }}
            >
                {news?.title}
            </h1>
            <Grid container spacing={4}>
                <Grid item lg={9} md={9} sm={12}>
                    <CoverImg src={news?.imageUrl} alt={news?.title} />
                    <div style={{ marginBottom: rhythm(2) }}>
                        <p
                            style={{
                                ...scale(-1 / 5),
                                marginBottom: rhythm(0.5),
                            }}
                        >
                            By{' '}
                            <span style={{ color: 'blue' }}>
                                {news?.newsSite}
                            </span>
                        </p>
                        <p
                            style={{
                                ...scale(-1 / 5),
                                marginBottom: rhythm(0.5),
                            }}
                        >
                            {news?.publishedAt
                                ? format(
                                      new Date(news?.publishedAt as string),
                                      `E. d, yyyy 'at' H:ss aaaa O`
                                  )
                                : ''}
                        </p>
                    </div>
                    <div style={{ marginBottom: rhythm(3) }}>
                        {news?.summary}
                    </div>
                </Grid>
                <Grid item lg={3} md={3}>
                    <aside>
                        <TitleDecoration>Latest</TitleDecoration>
                        <div>
                            {spaceNewsMock.map((news) => (
                                <ArticleCard
                                    key={news.id}
                                    variant="aside"
                                    api="articles"
                                    article={news}
                                />
                            ))}
                        </div>
                    </aside>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ArticleDetail
