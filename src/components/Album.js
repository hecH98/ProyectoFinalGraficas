import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import AppBarComponent from "./AppBarComponent";
import CardEstados from "./CardEstados";
import Aguascalientes from "./Aguascalientes";
import BajaCalifornia from "./BajaCalifornia";
import BajaCaliforniaSur from "./BajaCaliforniaSur";
import Campeche from "./Campeche";
import Chiapas from "./Chiapas";
import Chihuahua from "./Chihuahua";
import CiudadMexico from "./CiudadMexico";
import Coahuila from "./Coahuila";
import Colima from "./Colima";
import Durango from "./Durango";
import EstadoMexico from "./EstadoMexico";
import Guanajuato from "./Guanajuato";
import Guerrero from './Guerrero';
import Hidalgo from "./Hidalgo";
import Jalisco from "./Jalisco";
import Michoacan from "./Michoacan";
import Morelos from "./Morelos";
import Nayarit from "./Nayarit";
import NuevoLeon from "./NuevoLeon";
import Oaxaca from "./Oaxaca";
import Puebla from "./Puebla";
import Queretaro from "./Queretaro";
import QuintanaRoo from "./QuintanaRoo";
import SanLuisPotosi from "./SanLuisPotosi";
import Sinaloa from "./Sinaloa";
import Sonora from "./Sonora";
import Tabasco from "./Tabasco";
import Tamaulipas from "./Tamaulipas";
import Tlaxcala from "./Tlaxcala";
import Veracruz from "./Veracruz";
import Yucatan from "./Yucatan";
import Zacatecas from "./Zacatecas";
// import { Tab } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        palomino.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
//const counterEstados = 0;
// const estados = ["Aguascalientes",
//   "Baja California", 
//   "Baja California Sur",
//   "Campeche", 
//   "Chiapas", 
//   "Chihuahua", 
//   "Ciudad de México",
//   "Coahuila de Zaragoza", 
//   "Colima", 
//   "Durango", 
//   "Estado de México",
//   "Guanajuato", 
//   "Guerrero", 
//   "Hidalgo", 
//   "Jalisco", 
//   "Michoacán de Ocampo", 
//   "Morelos", 
//   "Nayarit", 
//   "Nuevo León", 
//   "Oaxaca", 
//   "Puebla", 
//   "Querétaro", 
//   "Quintana Roo", 
//   "San Luis Potosí", 
//   "Sinaloa", 
//   "Sonora", 
//   "Tabasco", 
//   "Tamaulipas", 
//   "Tlaxcala", 
//   "Veracruz de Ignacio de la Llave", 
//   "Yucatán",
//   "Zacatecas"]

export default function Album() {
  const classes = useStyles();

  return (
    
    <React.Fragment>
      <CssBaseline />
      <AppBarComponent></AppBarComponent>
      <main>
        {/* Hero unit */}
        <div style={{width: '100%', marginTop: '10px'}}>
          <div className={classes.heroContent} style={{display: 'table', margin: '0 auto'}}>
            <Container justify="center" component="div"> 
              <CardEstados component="div" justify="center" ></CardEstados>
            </Container>
            <Container maxWidth="sm" justify="center">
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary" href="/canvas" startIcon={<CloudUploadIcon />}>
                      Mapa Completo en 3D
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Cada Estado
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={3}>
            <div style={{marginTop: '10px'}}>
            <Aguascalientes></Aguascalientes>
            </div>
            <div style={{marginTop: '10px'}}>
            <BajaCalifornia></BajaCalifornia>
            </div>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <BajaCaliforniaSur></BajaCaliforniaSur>
            </div>
          </Grid>
          <Grid container spacing={3}>
            <div style={{marginTop: '10px'}}>
            <Campeche></Campeche>
            </div>
            <div style={{marginTop: '10px'}}>
            <Chiapas></Chiapas>
            </div>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <Chihuahua></Chihuahua>
            </div>
          </Grid>
          <Grid container spacing={3}>
            <div style={{marginTop: '10px'}}>
            <CiudadMexico></CiudadMexico>
            </div>
            <div style={{marginTop: '10px'}}>
            <Coahuila></Coahuila>
            </div>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <Colima></Colima>
            </div>
          </Grid>
          <Grid container spacing={3}>
            <div style={{marginTop: '10px'}}>
            <Durango></Durango>
            </div>
            <div style={{marginTop: '10px'}}>
            <EstadoMexico></EstadoMexico>
            </div>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <Guanajuato></Guanajuato>
            </div>
          </Grid>
          <Grid container spacing={3}>
            <div style={{marginTop: '10px'}}>
            <Guerrero></Guerrero>
            </div>
            <div style={{marginTop: '10px'}}>
            <Hidalgo></Hidalgo>
            </div>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <Jalisco></Jalisco>
            </div>
          </Grid>
          <Grid container spacing={3}>
            <div style={{marginTop: '10px'}}>
            <Michoacan></Michoacan>
            </div>
            <div style={{marginTop: '10px'}}>
            <Morelos></Morelos>
            </div>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <Nayarit></Nayarit>
            </div>
          </Grid>
          <Grid container spacing={3}>
            <div style={{marginTop: '10px'}}>
            <NuevoLeon></NuevoLeon>
            </div>
            <div style={{marginTop: '10px'}}>
            <Oaxaca></Oaxaca>
            </div>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <Puebla></Puebla>
            </div>
          </Grid>
          <Grid container spacing={3}>
            <div style={{marginTop: '10px'}}>
            <Queretaro></Queretaro>
            </div>
            <div style={{marginTop: '10px'}}>
            <QuintanaRoo></QuintanaRoo>
            </div>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <SanLuisPotosi></SanLuisPotosi>
            </div>
          </Grid>
          <Grid container spacing={3}>
            <div style={{marginTop: '10px'}}>
            <Sinaloa></Sinaloa>
            </div>
            <div style={{marginTop: '10px'}}>
            <Sonora></Sonora>
            </div>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <Tabasco></Tabasco>
            </div>
          </Grid>
          <Grid container spacing={3}>
            <div style={{marginTop: '10px'}}>
            <Tamaulipas></Tamaulipas>
            </div>
            <div style={{marginTop: '10px'}}>
            <Tlaxcala></Tlaxcala>
            </div>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <Veracruz></Veracruz>
            </div>
          </Grid>
          <Grid container spacing={3}>
            <div style={{marginTop: '10px'}}>
            <Yucatan></Yucatan>
            </div>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <Zacatecas></Zacatecas>
            </div>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Créditos
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Estudiantes del Tecnológico de Monterrey Campus Guadalajara
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">Daniel Lepe Vega</Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">David Javier Pérez Álvarez</Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">Hector Humberto Herrera Macías</Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}