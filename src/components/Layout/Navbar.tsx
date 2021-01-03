import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Hidden, IconButton, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { rhythm, scale } from 'src/utils'
import { useWindowSize } from 'react-use'

import Sidebar from './Sidebar'

const menu: { label: string; slug: string }[] = [
    {
        label: 'Home',
        slug: '/',
    },
    {
        label: 'Blog',
        slug: '/blogs',
    },
    {
        label: 'Article',
        slug: '/articles',
    },
    {
        label: 'Report',
        slug: '/reports',
    },
]

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 500,
        },
    })
)

const TopBar = styled(AppBar)`
    background-color: #000 !important;
`

const SiteTitle = styled.h2`
    color: #fff;
    margin: ${rhythm(0 / 5)} 0px;
    text-align: center;
`
const SubTitle = styled.p`
    text-align: center;
    margin-bottom: ${rhythm(2 / 5)};
    font-style: italic;
`
export function Navbar() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const { width } = useWindowSize()

    React.useEffect(() => {
        if (width >= 960) {
            setOpen(false)
        }
    }, [width])

    const Mobile = (
        <Hidden smDown>
            <Grid container spacing={1} alignItems="stretch">
                <Grid item lg={12} md={12} sm={12}>
                    <ul
                        style={{
                            listStyle: 'none',
                            display: 'flex',
                            margin: 0,
                        }}
                    >
                        {menu.map((item) => (
                            <li
                                key={item.slug}
                                style={{
                                    margin: `0px ${rhythm(0.5)}`,
                                }}
                            >
                                <NavLink
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fff',
                                        textTransform: 'capitalize',
                                        fontWeight: 500,
                                        ...scale(0 / 6),
                                    }}
                                    to={item.slug}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
        </Hidden>
    )

    const Desktop = (
        <Hidden mdUp>
            <Grid container spacing={0}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        style={{ position: 'absolute', top: '20%' }}
                        onClick={() => {
                            setOpen((prev) => !prev)
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SiteTitle
                        style={{
                            ...scale(2 / 5),
                        }}
                    >
                        The Space Post
                    </SiteTitle>
                    <SubTitle
                        style={{
                            ...scale(-1 / 6),
                        }}
                    >
                        Rocket Lover
                    </SubTitle>
                </Grid>
            </Grid>
        </Hidden>
    )

    return (
        <div style={{ display: 'flex' }}>
            <TopBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    {Desktop}
                    {Mobile}
                </Toolbar>
            </TopBar>
            <Sidebar
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
                menus={menu}
            />
        </div>
    )
}
export default Navbar
