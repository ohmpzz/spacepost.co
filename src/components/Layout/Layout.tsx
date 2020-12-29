import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}

export function Layout(props: LayoutProps) {
    return <main>{props.children}</main>
}

export default Layout
