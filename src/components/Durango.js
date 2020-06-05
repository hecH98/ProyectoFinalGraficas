import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaDurango from "../images/mapa-de-durango.jpg";


export default function Durango() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
           
            image=""
            title="Durango"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaDurango} alt="Durango" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Durango - Capital: Durango
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Durango es la ciudad capital del estado de Durango, en México. Es conocida por su centro histórico, con importantes edificios barrocos mexicanos y coloniales. En 1695 se comenzó a construir la Catedral Basílica adornada, que tiene arte sacro y tallados en madera en su interior. El Museo de la Ciudad 450, en un palacio convertido, tiene exhibiciones que recorren la historia de la ciudad. Bebeleche es un museo moderno con exhibiciones interactivas sobre ciencia y cultura.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Durango">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
