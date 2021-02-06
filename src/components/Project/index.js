import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';


function Project(props) {
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
                    <Typography variant="body1" gutterBottom>
                        {props.props.description}
                    </Typography>
                    <Typography variant="body1">
                        <Button href={props.props.repo}>
                            <GitHubIcon className="wrapIcon"/>
                        </Button>
                        <Button href={props.props.url}>
                            <LinkIcon className="wrapIcon"/>
                        </Button>
                    </Typography>
                </Grid>
            </React.Fragment>
            :
            <React.Fragment>
                <Grid item xs={9} mb={2}>
                    <Typography variant="h4" align="right" gutterBottom>
                        {props.props.title}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {props.props.description}
                    </Typography>
                    
                    <Typography variant="body1" align="right">
                        <Button href={props.props.repo}>
                            <GitHubIcon className="wrapIcon"/>
                        </Button>
                        <Button href={props.props.url}>
                            <LinkIcon className="wrapIcon"/>
                        </Button>
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
