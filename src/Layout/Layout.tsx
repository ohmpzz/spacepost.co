import React from 'react'
import { typography } from 'src/utils/typography'
import {
    createMuiTheme,
    ThemeProvider,
    SimplePaletteColorOptions,
} from '@material-ui/core/styles'
import Helmet from 'react-helmet'
import Router from 'src/pages/Router'

typography.injectStyles()

// const primary: SimplePaletteColorOptions = {
//     light: '#',
//     main: '#',
//     dark: '#',
//     contrastText: '#',
// }

// const secondary: SimplePaletteColorOptions = {
//     light: '#',
//     main: '#',
//     dark: '#',
//     contrastText: '#',
// }

// const error: SimplePaletteColorOptions = {
//     light: '#',
//     main: '#',
//     dark: '#',
//     contrastText: '#',
// }

const theme = createMuiTheme({
    // palette: {
    //     primary,
    //     secondary,
    //     error,
    // },
    typography: {
        fontFamily: ['Libre Franklin'].join(''),
    },
})

export function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <Helmet htmlAttributes={{ lang: 'en' }}>
                <title>The Space Post</title>
            </Helmet>
            <Router />
        </ThemeProvider>
    )
}

export default Layout
