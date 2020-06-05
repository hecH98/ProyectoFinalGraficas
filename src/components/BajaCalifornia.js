import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import mapaBajaCalifornia from "../images/mapa-de-baja-california.jpg";

export default function BajaCalifornia() {
    return (
        <Card>
        <CardActionArea>
          <CardMedia
            image=""
            title="BajaCalifornia"
          />
          
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaBajaCalifornia} alt="BajaCalifornia" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Baja California - Capital: Mexicali
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Baja California es un estado Mexicano en la Península de Baja California que limita con el estado de California de Estados Unidos. El paisaje se extiende por montañas y playas en el océano Pacífico y el golfo de California. Las ciudades cerca de la frontera con Estados Unidos incluyen Tijuana, conocida como un destino comercial y de bohemia, como también la ciudad de Rosarito, con sus amplias playas en el Pacífico.            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?BajaCalifornia">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
