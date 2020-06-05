import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaSanLuisPotosi from "../images/mapa-de-san-luis-potosi.jpg";

export default function SanLuisPotosi() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
            
            image=""
            title="SanLuisPotosi"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaSanLuisPotosi} alt="SanLuisPotosi" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              San Luis Potosí - Capital: San Luis Potosí
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            San Luis Potosí es una ciudad del centro de México. Fue un importante centro minero del oro y la plata en el Camino Real de Tierra Adentro, una ruta comercial de mediados del siglo XVI al siglo XIX. Es conocida por los edificios coloniales, como el imponente Templo de San Francisco de la época barroca, que domina el frondoso Jardín de San Francisco. Cerca, se encuentra el Templo del Carmen, que data del siglo XVIII y tiene una fachada con adornos tallados.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?SanLuisPotosi">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
