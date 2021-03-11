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
        </Card>
    );
}
