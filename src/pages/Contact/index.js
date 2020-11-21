import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import { Grid, Typography } from '@material-ui/core';
import './styles.css';

function Contact() {
    return (
        <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item xs={12}>
            <Typography align="center" variant="h2" gutterBottom>             
                Contact
            </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container justify="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} className="contact">
                    <Typography variant="body1" align="center" gutterBottom>             
                        <a href="https://github.com/artuis"><GitHubIcon className="wrapIcon"/> GitHub</a>
                    </Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="body1" align="center" gutterBottom>             
                    <a href="https://www.linkedin.com/in/thomas-an-9743271b5/"><LinkedInIcon className="wrapIcon"/> LinkedIn</a>
                    </Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="body1" align="center" gutterBottom>             
                        <AlternateEmailIcon className="wrapIcon"/><a href="tommyan97@msn.com"> tommyan97@msn.com</a>
                    </Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="body1" align="center" gutterBottom>             
                        <PhoneIcon className="wrapIcon"/> (425) 773-6912
                    </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
;
export default Contact;
