import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaChihuahua from "../images/mapa-de-chihuahua.jpg";


export default function Chihuahua() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
            
            image=""
            title="Chihuahua"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaChihuahua} alt="Chihuahua" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Chihuahua - Capital: Chihuahua
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            La ciudad de Chihuahua es la capital del estado de Chihuahua en el noroeste de México. Es conocida por la Catedral de Chihuahua española de estilo barroco y el Palacio de Gobierno del siglo XVIII, un nuevo edificio de gobierno con enormes murales que ilustran eventos históricos importantes de México. La ciudad también alberga el extremo este del ferrocarril Chepe, que recorre los desfiladeros teñidos de verde del área del Cañón del Cobre.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Chihuahua"> 
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
