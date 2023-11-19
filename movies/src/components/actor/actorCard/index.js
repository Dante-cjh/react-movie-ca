import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardHeader from "@mui/material/CardHeader";
import {ActorsContext} from "../../../contexts/actorsContext";

const ActorCard = ({actor, action}) => {
    const {myStar, addToStar} = useContext(ActorsContext);

    if (myStar.find((id) => id === actor.id)) {
        actor.favorite = true;
    } else {
        actor.favorite = false
    }

    // 将作品标题连接成字符串，最后一个前用“and”代替逗号
    // const titles = actor.known_for
    //     .map(work => work.title)
    //     .slice(0, 3) // 只取前三个作品
    //     .join(', ')
    //     .replace(/, (?=[^,]*$)/, ' and '); // 正则表达式用于找到最后一个逗号并替换成“and”

    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                avatar={
                    actor.favorite ? (
                        <Avatar sx={{backgroundColor: 'red'}}>
                            <FavoriteIcon/>
                        </Avatar>
                    ) : null
                }
                title={
                    <Typography variant="h5" component="p">
                        {actor.name}
                    </Typography>
                }
            />
                <Link to={`/actors/${actor.id}`}>
                    <CardMedia
                        component="img"
                        image={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        alt={actor.name}
                    />
                </Link>
            <CardActions>
                <CardContent>
                    <Typography variant="subtitle1" color="text.sendary">
                        {action(actor)}
                        {actor.name}
                    </Typography>
                    {/*<Typography variant="subtitle1" color="text.secondary">*/}
                    {/*    Known for: {actor.known_for_department}*/}
                    {/*</Typography>*/}
                    {/*<Typography variant="body2" color="text.secondary">*/}
                    {/*    {titles}*/}
                    {/*</Typography>*/}
                </CardContent>
            </CardActions>
        </Card>
    );
};

export default ActorCard;