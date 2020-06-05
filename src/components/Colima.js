import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaColima from "../images/mapa-de-colima.jpg";


export default function Colima() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
            
            image=""
            title="Colima"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaColima} alt="Colima" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Colima - Capital: Colima
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Colima es la capital del estado mexicano del mismo nombre. Se ubica cerca de la costa del Pacífico central, en un valle al sur del volcán Colima. El Jardín Libertad es su plaza principal y cuenta con un quiosco belga del siglo XIX y el Portal Medellín, un gran edificio con filas de arcos. La Catedral Basílica Menor de Colima tiene una fachada neoclásica. Junto a la catedral está el Palacio de Gobierno.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Colima">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
