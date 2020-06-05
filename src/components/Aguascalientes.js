import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import mapaAguascalientes from '../images/mapa-de-aguascalientes.jpg';

export default function Aguascalientes() {
   
  return (
        <Card>
        <CardActionArea>
          <CardMedia
            image=""
            title="Aguascalientes"
          />
          
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaAguascalientes} alt="Aguascalientes" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Aguascalientes - Capital: Aguascalientes
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Aguascalientes es una ciudad de la zona central de México, conocida por los edificios coloniales españoles de su centro histórico. En la Plaza Patria se ubica la Catedral de Nuestra Señora de la Asunción, con pinturas del siglo XVIII de Miguel Cabrera. El Palacio de Gobierno del siglo XVII es conocido por sus numerosos arcos interiores tallados. El Museo Nacional de la Muerte exhibe arte funerario y artefactos desde la época precolombina hasta la actualidad.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Aguascalientes">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
