import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import mapaMexico from '../images/mapaMexico3D.jpg';
import HechoEnMexico from '../images/logoMexico.png';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 15,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  },
  media: {
    height: 0,
    paddingTop: '5%', // 16:9
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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardEstados() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  console.log(mapaMexico);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="El mejor país del mundo México"
        subheader="Mayo 27 de 2020"
      />
      <CardMedia
        className={classes.media}
        // component="img"
        title="Mapa de México"
        // height="160"
        image={mapaMexico}
      />
      <CardContent>
         <div style={{width: '100%', marginTop: '1px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={HechoEnMexico} alt="HechoEnMexico" height= "250" />;
          </div>
          </div>
        <Typography variant="body2" color="textSecondary" component="p">
        Esta es una aplicación didáctica para que cualquiera que quiera aprender sobre los estados de México lo pueda hacer con los Estados modelados en 3D y con información interesante sobre ellos.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            México es el país con la mayor diversidad del mundo.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}