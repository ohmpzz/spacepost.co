import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
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

export default function PersistentDrawerLeft() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.navColor}>
                <Toolbar>
                    <Burgher />
                </Toolbar>
            </AppBar>
        </div>
    )
}
