import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden'
import { Logo, TitleDecoration } from 'src/components'
import { Container, Grid } from '@material-ui/core'

export function IndexPage(props: RouteComponentProps) {
    return (
        <>
            <Hidden smDown>
                <Logo />
            </Hidden>
            <Container>
                <Grid container spacing={4}>
                    <Grid item lg={6} md={6} sm={6}>
                        <TitleDecoration>ตัวอย่าง</TitleDecoration>
                        <p>Hello, The Space Post</p>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6}>
                        <TitleDecoration>Blog</TitleDecoration>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default IndexPage
