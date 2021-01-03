import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden'
import { Logo, TitleDecoration, ArticleCard } from 'src/components'
import { Container, Grid } from '@material-ui/core'
import { spaceNewsMock } from 'src/models'

export function IndexPage(props: RouteComponentProps) {
    return (
        <>
            <Hidden smDown>
                <Logo />
            </Hidden>
            <Container>
                <Grid container spacing={4}>
                    <Grid item lg={3} md={3} sm={3}>
                        <TitleDecoration>Articles</TitleDecoration>
                        {spaceNewsMock.map((article) => (
                            <div key={article?.id} style={{ height: '350px' }}>
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

export default IndexPage
