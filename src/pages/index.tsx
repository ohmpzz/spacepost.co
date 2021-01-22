import React from 'react'
import { Logo, ArticleCard, ArticleCardSkeleton } from 'src/components'
import { Container, Grid, Hidden } from '@material-ui/core'
import { useFetchSpaceNewsAPI } from 'src/hooks'
import { SEO } from 'src/components'
export function IndexPage() {
    const { news, loading } = useFetchSpaceNewsAPI('articles').GetAll({
        _limit: 10,
    })

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
                    xs={12}
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
    return (
        <>
            <SEO title={'Home'} />
            <Hidden smDown>
                <Logo />
            </Hidden>
            <Container>
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12}>
                        {loading ? <>{Skeleton}</> : <>{DataCard}</>}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default IndexPage
