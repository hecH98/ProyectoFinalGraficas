import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaChiapas from "../images/mapa-de-chiapas.jpg";

export default function Chiapas() {
    return (
        <Card>
        <CardActionArea>
          <CardMedia
            
            image=""
            title="Chiapas"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaChiapas} alt="Chiapas" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
             Chiapas - Capital: Tuxtla Gutiérrez
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Chiapas es un estado del sur de México que limita con Guatemala. Sus zonas montañosas altas y el denso bosque tropical tienen varios sitios arqueológicos mayas y pueblos coloniales españoles. En la ciudad colonial de San Cristóbal de las Casas, el Templo y Ex-Convento Santo Domingo alberga una iglesia barroca y un museo que muestra artefactos regionales. En torno a él, hay un mercado donde se venden artículos, como tejidos coloridos.</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Chiapas">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
