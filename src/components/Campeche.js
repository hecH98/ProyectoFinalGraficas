import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaCampeche from "../images/mapa-de-campeche.jpg";

export default function Campeche() {
    return (
        <Card>
        <CardActionArea>
          <CardMedia
            
            image=""
            title="Campeche"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaCampeche} alt="Campeche" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Campeche - Capital: Campeche
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Campeche es una ciudad puerto de México, ubicada en el golfo de México. Es conocida por sus edificios coloniales barrocos conservados, la arquitectura militar y el distrito histórico amurallado. En respuesta a los ataques piratas, la ciudad se fortificó en el siglo XVII y 2 fortalezas sobre cerros son museos en la actualidad. El Fuerte de San Miguel alberga el Museo Arqueológico de Campeche, con artefactos de sitios mayas locales, como Edzná, Isla Jaina y Calakmul.</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Campeche">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
