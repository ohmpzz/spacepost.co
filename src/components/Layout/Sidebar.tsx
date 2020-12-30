import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Toolbar, Drawer, List, ListItem } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { rhythm, scale } from 'src/utils'

const drawerWidth = 240
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: '#3f3f3f',
        },
    })
)

interface SidebarProps {
    open: boolean
    onClose: () => void
    menus: { label: string; slug: string }[]
}
export function Sidebar(props: SidebarProps) {
    const classes = useStyles()

    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
            open={props.open}
            onClose={props.onClose}
            variant="temporary"
        >
            <Toolbar style={{ marginTop: rhythm(1) }} />
            <List>
                {props.menus.map((item) => (
                    <ListItem key={item.slug}>
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
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default Sidebar
