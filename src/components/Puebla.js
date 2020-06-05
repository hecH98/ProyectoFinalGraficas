import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaPuebla from "../images/mapa-de-puebla.jpg";

export default function Puebla() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
            
            image=""
            title="Puebla"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaPuebla} alt="Puebla" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Puebla - Capital: Puebla
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Puebla es una ciudad del área este central de México, al sureste de Ciudad de México. Es conocida por su historia culinaria, la arquitectura colonial y las cerámicas. La cerámica pintada de Talavera que adorna varios edificios es elaborada localmente. La Catedral de Puebla, de la época renacentista, tiene campanarios altos y se yergue frente a la plaza central, el Zócalo. El Museo Amparo ofrece grandes exhibiciones de arte prehispánico, como cerámicas y fragmentos de murales.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Puebla">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
