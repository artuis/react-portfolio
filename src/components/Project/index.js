import { Grid, Typography } from '@material-ui/core';
import React from 'react'

function Project(props) {
    console.log(props.props);
    return (
        <React.Fragment>
            {
            props.props.align
            ?
            <React.Fragment>
                <Grid item xs={3} >
                    <a href={props.props.url}>
                        <img src={props.props.src} alt={`Preview of ${props.props.title}`}/>
                    </a>
                </Grid>
                <Grid item xs={9} mb={2}>
                    <Typography variant="h4" gutterBottom>
                        {props.props.title}
                    </Typography>
                    <Typography variant="body1">
                        {props.props.description}
                    </Typography>
                </Grid>
            </React.Fragment>
            :
            <React.Fragment>
                <Grid item xs={9} mb={2}>
                    <Typography variant="h4" align="right" gutterBottom>
                        {props.props.title}
                    </Typography>
                    <Typography variant="body1">
                        {props.props.description}
                    </Typography>
                </Grid>
                <Grid item xs={3} mb={2}>
                    <img src={props.props.src} alt={`Preview of ${props.props.title}`}/>
                </Grid>
            </React.Fragment>
            }
        </React.Fragment>
        
    )
}

export default Project;
