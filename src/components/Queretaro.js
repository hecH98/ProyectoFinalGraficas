import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import mapaQueretaro from "../images/mapa-de-queretaro.jpg";

export default function Queretaro() {
    return (
        <Card >
        <CardActionArea>
          <CardMedia
            
            image=""
            title="Queretaro"
          />
          <CardContent>
          <div style={{width: '100%', marginTop: '10px'}}>
          <div style={{display: 'table', margin: '0 auto'}}>
          <img src={mapaQueretaro} alt="Queretaro" height= "250" />;
          </div>
          </div>
            <Typography gutterBottom variant="h5" component="h2">
              Queretaro - Capital: Querétaro
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Santiago de Querétaro es una ciudad del centro de México. Es conocida por su arquitectura colonial española bien conservada, con un sorprendente acueducto de piedra rosa. Entre los edificios barrocos destacados se incluyen la iglesia Santa Rosa de Viterbo. Cerca está el Templo de San Francisco de color ocre, en el Jardín Zenea, la plaza principal de la ciudad. En el antiguo convento de la iglesia, el Museo Regional de Querétaro exhibe artefactos prehispánicos, coloniales y republicanos.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/canvas?Queretaro">
            Ver más
          </Button>
        </CardActions>
      </Card>
    )
}
