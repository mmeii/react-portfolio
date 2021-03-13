/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px",
        alignItems: "stretch",
    },
    root: {
        maxWidth: 345,
        alignItems: "stretch",
        flexGrow: 1
    },
    media: {
        height: 200,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

export default function App() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const styles = {
        height: "100%"
    }

    return (
        <Grid
            container
            spacing={10}
            className={classes.gridContainer}
            justify="center"
            alignItems="stretch"
        >

            {/* LibMaker */}
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root} style={styles}>
                    <CardMedia
                        className={classes.media}
                        image={`${process.env.PUBLIC_URL}/assets/images/libmaker-screenshot.png`}
                        title="LibMaker 3000"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            LibMaker 3000
                            </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A Mad Lib generator that takes user input and plugs it into a predefined story template
                            where the completed mad libs are saved into a database.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <a href="https://github.com/mmeii/make-your-madlibs" target="_blank">
                            <IconButton aria-label="LibMaker GitHub">
                                <GitHubIcon />
                            </IconButton>
                        </a>
                        <a href="https://makeyourmadlib.herokuapp.com/" target="_blank">
                            <IconButton aria-label="LibMaker Live Website">
                                <PlayCircleOutlineIcon />
                            </IconButton>
                        </a>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                Features: JavaScript, Node, Express, Handlebars, MySQL,
                                Sequelize, Mobile responsive
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>

            {/* Eat the burger */}
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root} style={styles}>
                    <CardMedia
                        className={classes.media}
                        image={`${process.env.PUBLIC_URL}/assets/images/eat-da-burger.png`}
                        title="Eat-Da-Burger!"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Eat-Da-Burger!
                            </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A restaurant app that lets users input the names of burgers they'd like to eat.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <a href="https://github.com/mmeii/eat-da-burger" target="_blank">
                            <IconButton aria-label="LibMaker GitHub">
                                <GitHubIcon />
                            </IconButton>
                        </a>
                        <a href="https://cryptic-reef-17921.herokuapp.com/" target="_blank">
                            <IconButton aria-label="LibMaker Live Website">
                                <PlayCircleOutlineIcon />
                            </IconButton>
                        </a>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                Features: JavaScript, Node, Express, Handlebars, MySQL,
                                Sequelize, Mobile responsive
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>

            {/* Corona Date */}
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root} style={styles}>
                    <CardMedia
                        className={classes.media}
                        image={`${process.env.PUBLIC_URL}/assets/images/coronadate-screenshot.png`}
                        title="Corona Date"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Corona Date
                            </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Find events in a specific state Covid-19 data.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <a href="https://mmeii.github.io/corona-date/" target="_blank">
                            <IconButton aria-label="CoronaDate GitHub">
                                <GitHubIcon />
                            </IconButton>
                        </a>
                        <a href="https://github.com/mmeii/corona-date" target="_blank">
                            <IconButton aria-label="CoronaDate Live Website">
                                <PlayCircleOutlineIcon />
                            </IconButton>
                        </a>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                Features: HTML, CSS, Bulma, JavaScript, jQuery, API, Mobile responsive
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>

            {/* React-Todo List*/}
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root} style={styles}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={`${process.env.PUBLIC_URL}/assets/images/todolist-screenshot.png`}
                            title="React Todo List"
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
                            <a href="http://iammei.com/react-todo-list/" target="_blank">
                                <i className="fas fa-laptop-code"></i>
                            </a>
                        </Button>
                        <Button size="small" color="primary">
                            <a href="https://github.com/mmeii/react-todo-list" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root} style={styles}>
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
                            <a href="https://mmeii.github.io/weather-dashboard/" target="_blank" className="btn mr-2">
                                <i className="fas fa-laptop-code"></i>
                            </a>
                        </Button>
                        <Button size="small" color="primary">
                            <a href="https://github.com/mmeii/weather-dashboard" target="_blank" className="btn">
                                <i className="fab fa-github"></i>
                            </a>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root} style={styles}>
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
                            <a href="https://mmeii.github.io/code-quiz/" target="_blank" className="btn mr-2">
                                <i className="fas fa-laptop-code"></i>
                            </a>
                        </Button>
                        <Button size="small" color="primary">
                            <a href="https://github.com/mmeii/code-quiz" target="_blank" className="btn">
                                <i className="fab fa-github"></i>
                            </a>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid >
    );
}