import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import Burgher from './Sidebar'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        navColor: {
            backgroundColor: 'black',
        },
        titleColor: {
            color: 'white',
        },
    })
)

export function Navbar() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.navColor}>
                <Toolbar>
                    <Hidden mdUp>
                        <Burgher />
                    </Hidden>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Navbar
