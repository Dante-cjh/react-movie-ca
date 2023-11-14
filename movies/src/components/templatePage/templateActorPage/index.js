import React from "react";
import Grid from "@mui/material/Grid";
import {Container} from "@mui/material";
import KnownFor from "../../actor/KnownFor";
import ActorDetails from "../../actor/actorDetails";
import Biography from "../../actor/biography";


const TemplateActorPage = ({actorDetails, movieCredits}) => {
    // 创建已知作品（known_for）的数组
    const knownFor = movieCredits.cast;
    const biography = actorDetails.biography;
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <ActorDetails actor={actorDetails} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Biography bio={biography} />
                    <KnownFor knownFor={knownFor} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default TemplateActorPage;