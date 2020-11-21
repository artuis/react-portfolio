import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import './styles.css';

function Footer() {
    return (
        <footer className="footer">
            <Grid container>
                <Grid item xs={12}>
                    <div className="footerText">
                    <Typography variant="body1" align="center">
                        © Thomas An 2020
                    </Typography>
                    </div>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;
