import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaGuerrero from "../images/mapa-de-guerrero.jpg";

export default function Guerrero() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
         
            image=""
            title="Guerrero"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaGuerrero} alt="Guerrero" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Guerrero - Capital: Chilpancingo de los Bravo
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Guerrero es un estado de México, en la costa del Pacífico. La ciudad-balneario de Acapulco, ubicada en una gran bahía con rascacielos y las montañas de la Sierra Madre del Sur como telón de fondo, es conocida por su energética vida nocturna y las playas a lo largo de la bahía de Acapulco y el área de Acapulco Diamante. En el lugar icónico de La Quebrada, se practican clavados todos los días en una pequeña caleta. El Fuerte de San Diego, sobre un cerro, tiene un museo de historia y mira desde lo alto a la ciudad antigua.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Guerrero">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
