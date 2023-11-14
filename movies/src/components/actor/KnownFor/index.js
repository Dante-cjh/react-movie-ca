import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const KnownFor = ({ knownFor }) => {
    return (
        <Grid container spacing={2}>
            {knownFor.map((film) => (
                <Grid item xs={6} md={3} key={film.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
                            alt={film.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="subtitle2">
                                {film.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default KnownFor;
