import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaYucatan from "../images/mapa-de-yucatan.jpg";

export default function Yucatan() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
           
            image=""
            title="Yucatan"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaYucatan} alt="Yucatan" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Yucatan - Capital: Mérida
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Yucatán es un estado mexicano famoso por sus playas en el golfo de México y las ruinas mayas. El famoso Chichén Itzá abarca una enorme pirámide, un campo de pelota y templos de piedra. Otros sitios mayas son Ek Balam, famoso por las esculturas bien conservadas, y Uxmal, con sus complejas fachadas talladas. La capital y la ciudad más grande de Yucatán, Mérida, tiene una historia colonial que se refleja en edificios como la catedral de Mérida del siglo XVI.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Yucatan">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
