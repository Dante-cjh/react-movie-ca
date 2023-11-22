import React from 'react';
import {Grid, Card, CardMedia, CardContent, Typography, CardActionArea} from '@mui/material';
import {Link} from "react-router-dom";
import img from "../../../images/film-poster-placeholder.png";

const KnownFor = ({actorId,knownFor}) => {
    return (
        <Grid container spacing={2}>
            {knownFor.map((film) => (
                <Grid item xs={6} md={3} key={film.id}>
                    <Card>
                        <CardActionArea>
                            <Link to={`/actors/${actorId}/movies/${film.id}`}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={
                                        film.poster_path
                                            ? `https://image.tmdb.org/t/p/w200${film.poster_path}`
                                            : img
                                    }
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle2">
                                        {film.title}
                                    </Typography>
                                </CardContent>
                            </Link>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default KnownFor;
