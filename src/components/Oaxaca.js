import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaOaxaca from "../images/mapa-de-oaxaca.jpg";

export default function Oaxaca() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
            
            image=""
            title="Oaxaca"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaOaxaca} alt="Oaxaca" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Oaxaca - Capital: Oaxaca
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Oaxaca es una ciudad del centro de México. Es conocida por sus edificios coloniales, muchos de los cuales están hechos de piedra volcánica verde. En la plaza central del Zócalo, se encuentra el Palacio de Gobierno, con coloridos murales que representan la historia regional. La plaza Alameda de León está frente a la fachada adornada de la Catedral de Oaxaca. La iglesia Templo de Santo Domingo del siglo XVI tiene un lujoso interior barroco y un convento antiguo a su lado.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Oaxaca">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
