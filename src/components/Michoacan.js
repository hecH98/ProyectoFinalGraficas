import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaMichoacan from "../images/mapa-de-michoacan.jpg";

export default function Michoacan() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
            
            image=""
            title="Michoacan"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaMichoacan} alt="Michoacan" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Michoacan - Capital: Morelia
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Michoacán de Ocampo es uno de los treinta y un estados que junto con la Ciudad de México forman los Estados Unidos Mexicanos.​​
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Michoacan">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
