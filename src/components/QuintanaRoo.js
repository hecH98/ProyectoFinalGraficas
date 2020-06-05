import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaQuintanaRoo from "../images/mapa-de-quintana-roo.jpg";

export default function QuintanaRoo() {
    return (
        <Card>
        <CardActionArea>
          <CardMedia
           
            image=""
            title="QuintanaRoo"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaQuintanaRoo} alt="QuintanaRoo" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Quintana Roo - Capital: Chetumal
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Quintana Roo es un estado mexicano de la península de Yucatán. En su costa del Caribe, la ciudad de Tulum tiene ruinas mayas junto al mar, playas de arena y cavernas submarinas. Al noreste, la ciudad balneario de Cancún es conocida por su vida nocturna, la reserva de la naturaleza de la laguna Nichupté y las playas largas con arrecifes de coral. Frente a las costas de Cancún, la pequeña Isla Mujeres, bordeada de arrecifes, tiene senderos naturales y restaurantes frente a la playa.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?QuintanaRoo">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
