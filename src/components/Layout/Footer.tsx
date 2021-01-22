import React from 'react'
import styled from '@emotion/styled'
import { Box, Container, Grid } from '@material-ui/core'
import { rhythm, scale } from 'src/utils'
export function Footer() {
    const Footer = styled.a`
        color: #000000;
    `

    const Border = styled(Box)`
        color: hsl(0, 0%, 50%);
    `
    const Topic = styled.h3`
        font-size: ${scale(0 / 5).fontSize};
        line-height: ${scale(0 / 5).lineHeight};
        letter-spacing: 0.5px;
        text-decoration: none;
        font-weight: 600;
        color: hsl(0, 0%, 10%);
        margin-bottom: ${rhythm(0.5)};
        display: block;
    `
    const Submenu = styled.a`
        font-size: ${scale(-1 / 5).fontSize};
        line-height: ${scale(-1 / 5).lineHeight};
        text-decoration: none;
        color: hsl(0, 0%, 50%);
        margin-bottom: ${rhythm(0.1)};
        display: block;
    `
    const FooterLink = styled.a`
        font-size: 14px;
        line-height: 10px;
        text-decoration: none;
        color: hsl(0, 0%, 50%);
        margin-bottom: ${rhythm(0.5)};
        text-align: center;
    `
    return (
        <>
            <Container>
                <Border
                    borderTop={1}
                    style={{ marginBottom: 20, marginTop: 40 }}
                />
                <Grid container spacing={3} alignItems="stretch">
                    <Grid item lg={3} xs={3} md={3} sm={3}>
                        <Footer>
                            <Topic>About Us</Topic>

                            <Submenu>Public Relations</Submenu>

                            <Submenu>Careers</Submenu>

                            <Submenu>Diversity & Inclusion</Submenu>
                        </Footer>
                    </Grid>
                    <Grid item lg={3} xs={3} md={3} sm={3}>
                        <Footer>
                            <Topic>Get The Post</Topic>

                            <Submenu>Public Relations</Submenu>

                            <Submenu>Careers</Submenu>
                            <Submenu>Diversity & Inclusion</Submenu>
                        </Footer>
                    </Grid>
                    <Grid item lg={3} xs={3} md={3} sm={3}>
                        <Footer>
                            <Topic>Help</Topic>
                            <Submenu>Public Relations</Submenu>
                            <Submenu>Careers</Submenu>
                            <Submenu>Diversity & Inclusion</Submenu>
                        </Footer>
                    </Grid>
                    <Grid item lg={3} xs={3} md={3} sm={3}>
                        <Footer>
                            <Topic>Terms of Use</Topic>
                            <Submenu>Public Relations</Submenu>
                            <Submenu>Careers</Submenu>
                            <Submenu>Diversity & Inclusion</Submenu>
                        </Footer>
                    </Grid>
                </Grid>
                <Border
                    borderTop={1}
                    style={{ marginBottom: 20, marginTop: 20 }}
                />
                <Grid container justify="center">
                    <FooterLink>The Space Post </FooterLink>

                    <FooterLink>© 2021 The Space Post</FooterLink>
                </Grid>
            </Container>
        </>
    )
}
export default Footer
