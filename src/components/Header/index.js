import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <AppBar className="header" position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Thomas An
                </Typography>
                <Link to="/"><Button color="inherit">About Me</Button></Link>
                <Link to="/projects"><Button color="inherit">Projects</Button></Link>
                <Link to="/contact"><Button color="inherit">Contact</Button></Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header;