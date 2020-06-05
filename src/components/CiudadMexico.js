import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaCiudadMexico from "../images/mapa-del-distrito-federal-mexico.jpg";


export default function CiudadMexico() {
    return (
        <Card>
        <CardActionArea>
          <CardMedia
            
            image=""
            title="CiudadMexico"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaCiudadMexico} alt="CiudadMexico" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Ciudad de México - Capital: Ciudad de México
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Ciudad de México es la densamente poblada capital de México que se encuentra a gran altura. Es famosa por su Templo Mayor (un templo azteca del siglo XIII), la Catedral Metropolitana de México, de estilo barroco, de los conquistadores españoles y el Palacio Nacional, que alberga murales históricos de Diego Rivera. Todos estos hitos se ubican en torno a la Plaza de la Constitución, la enorme plaza principal conocida también como el Zócalo.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?CiudadDeMexico">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
