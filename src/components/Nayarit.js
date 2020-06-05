import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaNayarit from "../images/mapa-de-nayarit.jpg";

export default function Nayarit() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
            
            image=""
            title="Nayarit"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaNayarit} alt="Nayarit" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Nayarit - Capital: Tepic
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Nayarit es un pequeño estado en el oeste de México, entre las montañas arboladas de la Sierra Madre Occidental y el océano Pacífico. En el norte de la costa de la Riviera Nayarit, se encuentra la ciudad colonial de San Blas, cuyo fuerte San Basilio del siglo XVI protegió alguna vez el área de piratas. Justo al sur están las playas de la bahía de Matanchén aptas para el surf, mientras que en el norte está la isla Mexcaltitlán, considerada la cuna de la civilización Azteca.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Nayarit">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
