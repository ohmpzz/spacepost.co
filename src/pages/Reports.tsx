import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import useFetchSpaceNewsAPI from 'src/hooks/useFetchSpaceNewsAPI'
import { Container, Grid, Hidden } from '@material-ui/core'
import { Logo, TitleDecoration, ArticleCard } from 'src/components'

export function Reports(props: RouteComponentProps) {
    const news = useFetchSpaceNewsAPI('reports').GetAll({ _limit: 10 })

    return (
        <>
            <Hidden smDown>
                <Logo />
            </Hidden>
            <Container>
                <Grid container spacing={4}>
                    <Grid item lg={3} md={3} sm={3}>
                        <TitleDecoration>Report</TitleDecoration>
                        {news.map((article) => (
                            <div key={article?.id} style={{ height: '350px' }}>
                                <ArticleCard
                                    article={article}
                                    api="reports"
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

export default Reports
