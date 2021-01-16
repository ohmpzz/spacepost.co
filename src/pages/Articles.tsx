import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ArticleCard, ArticleCardSkeleton } from 'src/components'
import { Container, Grid, Hidden, Box } from '@material-ui/core'
import { useFetchSpaceNewsAPI } from 'src/hooks'
import { scale, rhythm } from 'src/utils'
export function Articles(props: RouteComponentProps) {
<<<<<<< HEAD
    const news = useFetchSpaceNewsAPI('articles').GetAll({ _limit: 10 })
=======
    const { news, loading } = useFetchSpaceNewsAPI('articles').GetAll({
        _limit: 10,
    })
    console.log({ props })
    const Skeleton = (
        <Grid container spacing={2}>
            {[...Array(4)].map((x) => (
                <Grid item lg={3} md={3} sm={3} style={{ height: '350px' }}>
                    <ArticleCardSkeleton />
                </Grid>
            ))}
        </Grid>
    )
    const DataCard = (
        <Grid container spacing={2}>
            {news.map((article) => (
                <Grid
                    item
                    lg={3}
                    md={3}
                    sm={3}
                    key={article?.id}
                    style={{ height: '350px' }}
                >
                    <ArticleCard
                        article={article}
                        api="articles"
                        variant="verticle"
                    />
                </Grid>
            ))}
        </Grid>
    )
>>>>>>> 2e2324c... Add SEO
    return (
        <>
            <Hidden smDown>
                <Container>
                    <Grid container spacing={3}>
                        <h1
                            style={{
                                marginBottom: rhythm(1 / 5),
                                ...scale(1.5),
                            }}
                        >
                            Articles
                        </h1>
                    </Grid>
                </Container>
            </Hidden>
            <Container>
<<<<<<< HEAD
                <Grid container spacing={4}>
                    <Grid item lg={3} md={3} sm={3}>
                        <TitleDecoration>Articles</TitleDecoration>
                        {news.map((article) => (
                            <div key={article?.id} style={{ height: '350px' }}>
                                <ArticleCard
                                    article={article}
                                    api="articles"
                                    variant="verticle"
                                />
                            </div>
                        ))}
=======
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12}>
                        <Box
                            borderBottom={1}
                            style={{ marginBottom: rhythm(7 / 5) }}
                        />
                        {loading ? <>{Skeleton}</> : <>{DataCard}</>}
>>>>>>> 2e2324c... Add SEO
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Articles
