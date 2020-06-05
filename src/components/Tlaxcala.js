import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaTlaxcala from "../images/mapa-de-tlaxcala.jpg";

export default function Tlaxcala() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
           
            image=""
            title="Tlaxcala"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaTlaxcala} alt="Tlaxcala" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Tlaxcala - Capital: Tlaxcala
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Tlaxcala es un pequeño estado en el centro de México, al este de Ciudad de México. En el sur, el sitio arqueológico de Cacaxtla exhibe coloridos frescos mayas, mientras que las ruinas cercanas de Xochitecatl incluyen antiguas pirámides. Al noreste de aquí, la capital del estado de Tlaxcala tiene una arquitectura notable, como el Palacio de Gobierno de Tlaxcala, con una fachada de baldosas naranjas y murales que representan la historia local.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Tlaxcala">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
