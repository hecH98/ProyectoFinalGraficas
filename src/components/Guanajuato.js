import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaGuanajuato from "../images/mapa-de-guanajuato.jpg";

export default function Guanajuato() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
            
            image=""
            title="Guanajuato"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaGuanajuato} alt="Guanajuato" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Guanajuato - Capital: Guanajuato
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Guanajuato es una ciudad central de México. Es conocida por su historia minera de la plata y su arquitectura colonial. Su red de túneles, pasajes y calles estrechas se representa en el Callejón del Beso, llamado así porque los balcones están tan cerca entre ellos que una pareja alcanza a besarse. En un antiguo granero, se encuentra el museo de historia local y arte Alhóndiga de Granaditas, con exhibiciones precolombinas.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Guanajuato">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
