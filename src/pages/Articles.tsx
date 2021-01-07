import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Logo, TitleDecoration, ArticleCard } from 'src/components'
import { Container, Grid, Hidden } from '@material-ui/core'
import useFetchSpaceNewsAPI from 'src/hooks/useFetchSpaceNewsAPI'
import { SpaceNews } from 'src/models'

export function Articles(props: RouteComponentProps) {
    const blogs = useFetchSpaceNewsAPI<SpaceNews[]>('articles', { _limit: 10 })
    return (
        <>
            <Hidden smDown>
                <Logo />
            </Hidden>
            <Container>
                <Grid container spacing={4}>
                    <Grid item lg={3} md={3} sm={3}>
                        <TitleDecoration>Articles</TitleDecoration>
                        {blogs &&
                            blogs.map((article) => (
                                <div
                                    key={article?.id}
                                    style={{ height: '350px' }}
                                >
                                    <ArticleCard
                                        article={article}
                                        api="articles"
                                        variant="verticle"
                                    />
                                </div>
                            ))}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Articles
