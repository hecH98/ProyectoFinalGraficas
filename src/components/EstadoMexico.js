import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaEstadoMexico from "../images/mexico-estado-mapa.jpg";

export default function EstadoMexico() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
            
            image=""
            title="EstadoDeMexico"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaEstadoMexico} alt="EstadoMexico" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Estado de México - Capital: Toluca
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            México, oficialmente llamado Estado Libre y Soberano de México y comúnmente llamado Estado de México para diferenciarlo del país, es una de las treinta y dos entidades federativas que conforman los Estados Unidos Mexicanos.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?EstadoDeMexico">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
