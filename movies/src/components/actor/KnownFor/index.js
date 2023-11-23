import React from 'react';
import {Grid, Card, CardMedia, CardContent, Typography, CardActionArea, ImageListItemBar} from '@mui/material';
import {Link} from "react-router-dom";
import img from "../../../images/film-poster-placeholder.png";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";

const KnownFor = ({actorId, knownFor}) => {
    return (
        <Grid container spacing={2}>

            <ImageList
                sx={{
                    gridAutoFlow: "column",
                    gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr)) !important",
                    gridAutoColumns: "minmax(160px, 1fr)"
                }}
            >
                {knownFor.map((film) => (
                    <ImageListItem>
                        <Link to={`/actors/${actorId}/movies/${film.id}`}>
                            <img src={film.poster_path ? `https://image.tmdb.org/t/p/w200${film.poster_path}` : img}/>
                            <ImageListItemBar title={film.title}/>
                        </Link>
                    </ImageListItem>
                ))}

            </ImageList>
        </Grid>
    );
};

export default KnownFor;
