import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaTabasco from "../images/mapa-de-tabasco.jpg";

export default function Tabasco() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
            
            image=""
            title="Tabasco"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaTabasco} alt="Tabasco" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Tabasco - Capital: Villahermosa
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Tabasco es un estado mexicano con una costa en el norte que bordea el golfo de México. En su capital, Villahermosa, está el Parque Museo La Venta, conocido por su zoológico y las colosales esculturas de piedra que datan de la civilización olmeca. El gran Museo de Historia de Tabasco documenta el área desde la época prehistórica, mientras que el Museo Regional de Antropología tiene exhibiciones sobre las civilizaciones nativas mayas y olmecas.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Tabasco">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
