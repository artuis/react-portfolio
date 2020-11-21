import React from 'react';
import { Grid, Typography} from '@material-ui/core';
import Project from '../../components/Project';
import GymBro from "../../assets/gym-bro.png";
import DnD from "../../assets/dnd-action-calc.png";
import googleBooks from "../../assets/google-books-lib.png"
import kirby from "../../assets/kirby-quiz.png";
import borg from "../../assets/burger.png";
import notetaker from "../../assets/notetaker.png";

function Projects() {
    const projects = [
        {
            id : 1,
            title : "Gym-Bro",
            align : true,
            url : "https://dan-gentile.github.io/gym-bro/",
            src : GymBro,
            description : "A web app that combines the Spotify Web API and Workout REST API to generate workout and music playlists depending on the desired settings."
        },
        {
            id : 2,
            title : "D&D Character Manager",
            align : false,
            url : "https://stark-island-65376.herokuapp.com/campaigns",
            src : DnD,
            description : "A web app that allows a user to create an account and manage Dungeons & Dragons character sheets as well as a calculator either using actual character stats or custom values to do dice rolls."
        },
        {
            id : 3,
            title : "React Google Books Library",
            align : true,
            url : "https://evening-ravine-79529.herokuapp.com/",
            src : googleBooks,
            description : "A web app using React.js, Google Books API, and MongoDB to search for books, and save them for future reference."
        },
        {
            id : 4,
            title : "Kirby Trivia Challenge",
            align : false,
            url : "https://artuis.github.io/timedQuiz/",
            src : kirby,
            description : "An online quiz leveraging Bootstrap and built-in Java methods to run a timed quiz on video game character Kirby."
        },
        {
            id : 5,
            title : "Eat Da Burger!",
            align : true,
            url : "https://protected-tundra-69894.herokuapp.com/",
            src : borg,
            description : "A web app using SQL and Express-Handlebars that can create burgers to consume, and listing which burgers have been consumed."
        },
        {
            id : 6,
            title : "Note Taker",
            align : false,
            url : "https://pacific-reaches-93944.herokuapp.com/",
            src : notetaker,
            description : "A web app that saves notes to an SQL database, and grabs them to render onto the page for future reference. Notes can also be freely deleted using the trash icon."
        }
    ]
    return (
        <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item xs={12}>
                <Typography align="center" variant="h2" gutterBottom>             
                    Projects
                </Typography>
                </Grid>
                {projects.map(e => <Project key={e.id} props={e} />)}
        </Grid>
    )
}

export default Projects;
