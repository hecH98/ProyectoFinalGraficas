import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaTamaulipas from "../images/mapa-de-tamaulipas.jpg";

export default function Tamaulipas() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
           
            image=""
            title="Tamaulipas"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaTamaulipas} alt="Tamaulipas" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Tamaulipas - Capital: Ciudad Victoria
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Tamaulipas, oficialmente Estado Libre y Soberano de Tamaulipas, es uno de los treinta y un estados que, junto con la Ciudad de México, forman los Estados Unidos Mexicanos.​​ Su capital es Ciudad Victoria y su ciudad más poblada es Reynosa.​ Fue fundado el 7 de febrero de 1824.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Tamaulipas">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
