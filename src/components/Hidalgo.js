import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaHidalgo from "../images/mapa-de-hidalgo.jpg";

export default function Hidalgo() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
           
            image=""
            title="Hidalgo"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaHidalgo} alt="Hidalgo" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Hidalgo - Capital: Pachuca de Soto
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Hidalgo es un estado del centro de México que se extiende al norte de Ciudad de México. La ventosa capital del estado, Pachuca tiene una torre del reloj, edificios coloniales, como la Iglesia barroca de San Francisco, y el Museo de Minería, que explora la historia minera de la región. Al oeste está Tula, un sitio arqueológico con pirámides y grandes columnas de piedra con forma de guerreros que datan del Imperio Tolteca.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Hidalgo">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
