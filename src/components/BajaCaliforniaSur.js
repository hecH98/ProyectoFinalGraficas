import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaBajaCaliforniaSur from "../images/mapa-de-baja-california-sur.jpg"

export default function BajaCaliforniaSur() {
    return (
        <Card>
        <CardActionArea>
          <CardMedia
            
            image=""
            title="BajaCaliforniaSur"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaBajaCaliforniaSur} alt="BajaCaliforniaSur" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Baja California Sur - Capital: La Paz
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Baja California Sur, oficialmente llamado Estado Libre y Soberano de Baja California Sur, es uno de los treinta y un estados que, junto con la Ciudad de México, forman los Estados Unidos Mexicanos.​​ Su capital y ciudad más poblada es La Paz.</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?BajaCaliforniaSur">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
