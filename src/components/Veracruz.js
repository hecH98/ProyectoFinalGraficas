import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaVeracruz from "../images/mapa-de-veracruz.jpg";

export default function Veracruz() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
           
            image=""
            title="Veracruz"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaVeracruz} alt="Veracruz" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Veracruz - Capital: Jalapa
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Veracruz, también conocida como Heroica Veracruz, es una ciudad portuaria mexicana, que se encuentra en la costa del Golfo de México, en el estado de Veracruz. Es uno de los puertos más antiguos y grandes del país, fundado en el siglo XVI por colonizadores españoles. En una isla se ubica San Juan de Ulúa, una fortaleza colonial y antiguo complejo carcelario que mira desde lo alto al puerto y funciona actualmente como un museo de historia.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Veracruz">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
