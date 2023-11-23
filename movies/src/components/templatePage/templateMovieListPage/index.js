import React, {Children, useState} from "react";
import Header from "../../movie/headerMovieList";
import FilterCard from "../../movie/filterMoviesCard";
import MovieList from "../../movie/movieList";
import Grid from "@mui/material/Grid";
import LoginCard from "../../user/LoginCard";

function MovieListPageTemplate({movies, title, action, children}) {
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const genreId = Number(genreFilter);

    let displayedMovies = movies
        .filter((m) => {
            return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        })
        .filter((m) => {
            return genreId > 0 ? m.genre_ids.includes(genreId) : true;
        });

    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
        else setGenreFilter(value);
    };

    return (
        <Grid container sx={{padding: '20px'}}>
            <Grid item xs={12}>
                <Header title={title}/>
            </Grid>
            <Grid item xs={12} container spacing={5} sx={{marginBottom: '20px'}}>
                <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <LoginCard/>
                    <FilterCard
                        onUserInput={handleChange}
                        titleFilter={nameFilter}
                        genreFilter={genreFilter}
                    />
                </Grid>
                <MovieList action={action} movies={displayedMovies}></MovieList>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                {children}
            </Grid>
        </Grid>
    );
}

export default MovieListPageTemplate;