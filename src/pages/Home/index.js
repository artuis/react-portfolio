import React from 'react';

import { Button, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import resume from '../../assets/Resume12-21-2020.pdf';

function Home() {
    return (
        <div>
            <Grid container justify="center" alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                    <Typography align="center" variant="h2" gutterBottom>             
                        About Me
                    </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify="center" alignItems="center" spacing={2}>
                            <Grid item xs={8}>
                            <Typography variant="body1" gutterBottom>             
                            Full stack web developer with a BS in Applied Physics from the University of Washington. Currently on track to earning a certificate in full stack web development from the University of Washington Coding Bootcamp, with experience in JavaScript, Java, and React.js. Recently worked in a group of four to create an application to help tabletop role-playing-game players currently working with pen and paper to move to a digital means of storing and calculating information. Motivated and excited to create applications with strong functionality and robust code.
                            </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="body2" align="right">
                            <Link to="/projects"><Button>Projects</Button></Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="body2" align="center">
                        <Link to="/contact"><Button>Contact</Button></Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="body2" align="left">
                        <a href={resume} target = "_blank" rel="noreferrer"><Button>Résumé</Button></a>
                        </Typography>
                    </Grid>

            </Grid>
        </div>
    )
}

export default Home;
