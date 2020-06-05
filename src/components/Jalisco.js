import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaJalisco from "../images/mapa-de-jalisco.jpg";

export default function Jalisco() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
           
            image=""
            title="Jalisco"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaJalisco} alt="Jalisco" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Jalisco - Capital: Guadalajara
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Jalisco es un estado del oeste de México que bordea el océano Pacífico. El estado es conocido por la música mariachi y el tequila que, según se dice, nacieron aquí. La capital, Guadalajara, tiene plazas coloniales y sitios icónicos, como el Teatro Degollado, de estilo neoclásico, y la majestuosa Catedral de Guadalajara, con sus agujas doradas gemelas. Cerca está el Palacio de Gobierno, que tiene murales del artista mexicano José Clemente Orozco.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Jalisco">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
