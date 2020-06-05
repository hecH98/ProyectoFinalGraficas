import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaZacatecas from "../images/mapa-de-zacatecas.jpg";

export default function Zacatecas() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
            
            image=""
            title="Zacatecas"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaZacatecas} alt="Zacatecas" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Zacatecas - Capital: Zacatecas
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Zacatecas es un estado del centronorte de México, al noroeste de Ciudad de México. En él se encuentra el sitio arqueológico La Quemada, un gran asentamiento precolombino con un museo, una pirámide sobre un cerro y columnas. La capital del estado, también llamada Zacatecas, se encuentra a gran altura y alberga la antigua mina de plata El Edén, con un tren subterráneo que pasa por formaciones rocosas únicas, exhibiciones de depósitos de minerales y antiguas máquinas mineras.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Zacatecas">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
