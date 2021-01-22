import React from 'react'
import { rhythm } from 'src/utils'
import Footer from './Footer'

import Navbar from './Navbar'

interface LayoutProps {
    children: React.ReactNode
}

export function Layout(props: LayoutProps) {
    return (
        <>
            <Navbar />
            <main style={{ marginTop: rhythm(4) }}>{props.children}</main>
            <Footer />
        </>
    )
}

export default Layout
