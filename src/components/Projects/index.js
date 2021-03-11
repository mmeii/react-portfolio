import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function Projects() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${process.env.PUBLIC_URL}/assets/images/libmaker-screenshot.png`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        LibMaker 3000
            </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A Mad Lib generator that takes user input and plugs it into a predefined story template where the completed mad libs are saved into a database.
            </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Link to="https://makeyourmadlib.herokuapp.com/" target="_blank" className="btn mr-2">
                        <i class="fas fa-laptop-code"></i>
                    </Link>
                </Button>
                <Button size="small" color="primary">
                    <Link to="https://github.com/mmeii/make-your-madlibs" target="_blank" className="btn">
                        <i class="fab fa-github"></i>
                    </Link>
                </Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${process.env.PUBLIC_URL}/assets/images/eat-da-burger.png`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Eat-Da-Burger!
            </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A restaurant app that lets users input the names of burgers they'd like to eat.
            </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Link to="https://cryptic-reef-17921.herokuapp.com/" target="_blank" className="btn mr-2">
                        <i class="fas fa-laptop-code"></i>
                    </Link>
                </Button>
                <Button size="small" color="primary">
                    <Link to="https://github.com/mmeii/eat-da-burger" target="_blank" className="btn">
                        <i class="fab fa-github"></i>
                    </Link>
                </Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${process.env.PUBLIC_URL}/assets/images/coronadate-screenshot.png`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Corona Date
            </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Find events in a specific state Covid-19 data.
            </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Link to="https://mmeii.github.io/corona-date/" target="_blank" className="btn mr-2">
                        <i class="fas fa-laptop-code"></i>
                    </Link>
                </Button>
                <Button size="small" color="primary">
                    <Link to="https://github.com/mmeii/corona-date" target="_blank" className="btn">
                        <i class="fab fa-github"></i>
                    </Link>
                </Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${process.env.PUBLIC_URL}/assets/images/todolist-screenshot.png`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Todo List
            </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A simple todo list application built with React hooks. It allows you to add, update and delete your items stored in local storage.
            </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Link to="http://iammei.com/react-todo-list/" target="_blank" className="btn mr-2">
                        <i class="fas fa-laptop-code"></i>
                    </Link>
                </Button>
                <Button size="small" color="primary">
                    <Link to="https://github.com/mmeii/react-todo-list" target="_blank" className="btn">
                        <i class="fab fa-github"></i>
                    </Link>
                </Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${process.env.PUBLIC_URL}/assets/images/weatherdashboard-screenshot.png`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Weather Dashboard
            </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Weather app that provides current and future weather forecasts in cities.
            </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Link to="https://mmeii.github.io/weather-dashboard/" target="_blank" className="btn mr-2">
                        <i class="fas fa-laptop-code"></i>
                    </Link>
                </Button>
                <Button size="small" color="primary">
                    <Link to="https://github.com/mmeii/weather-dashboard" target="_blank" className="btn">
                        <i class="fab fa-github"></i>
                    </Link>
                </Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${process.env.PUBLIC_URL}/assets/images/codequiz-screenshot.png`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Code Quiz
            </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A timed quiz on JavaScript fundamentals that stores high scores.
            </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Link to="https://mmeii.github.io/code-quiz/" target="_blank" className="btn mr-2">
                        <i class="fas fa-laptop-code"></i>
                    </Link>
                </Button>
                <Button size="small" color="primary">
                    <Link to="https://github.com/mmeii/code-quiz" target="_blank" className="btn">
                        <i class="fab fa-github"></i>
                    </Link>
                </Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${process.env.PUBLIC_URL}/assets/images/libmaker-screenshot.png`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        LibMaker 3000
            </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A Mad Lib generator that takes user input and plugs it into a predefined story template where the completed mad libs are saved into a database.
            </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Link to="https://makeyourmadlib.herokuapp.com/" target="_blank" className="btn mr-2">
                        <i class="fas fa-laptop-code"></i>
                    </Link>
                </Button>
                <Button size="small" color="primary">
                    <Link to="https://github.com/mmeii/make-your-madlibs" target="_blank" className="btn">
                        <i class="fab fa-github"></i>
                    </Link>
                </Button>
            </CardActions>

        </Card>
    );
}
