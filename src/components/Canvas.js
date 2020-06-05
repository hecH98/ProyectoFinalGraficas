import React, { Component } from 'react'
import * as THREE from 'three'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AguascalientesMtl from '../obj/Aguascalientes.mtl';

// import of all the states
import AguascalientesObj from '../obj/Aguascalientes.obj';
import BajaCaliforniaObj from '../obj/BajaCaliforniaNorte.obj';
import BajaCaliforniaSurObj from '../obj/BajaCaliforniaSur.obj';
import CampecheObj from '../obj/Campeche.obj';
import ChiapasObj from '../obj/Chiapas.obj';
import ChihuahuaObj from '../obj/Chihuahua.obj';
import CuidadDeMexicoObj from '../obj/CDMX.obj';
import CoahuilaObj from '../obj/Coahuila.obj';
import ColimaObj from '../obj/Colima.obj';
import DurangoObj from '../obj/Durango.obj';
import EstadoDeMexicoObj from '../obj/EstadoDeMexico.obj';
import GuanajuatoObj from '../obj/Guanajuato.obj';
import GuerreroObj from '../obj/Guerrero.obj';
import HidalgoObj from '../obj/Hidalgo.obj';
import JaliscoObj from '../obj/Jalisco.obj';
import MichoacanObj from '../obj/Michoacan.obj';
import MorelosObj from '../obj/Morelos.obj';
import NayaritObj from '../obj/Nayarit.obj';
import NuevoLeonObj from '../obj/NuevoLeon.obj';
import OaxacaObj from '../obj/Oaxaca.obj';
import PueblaObj from '../obj/Puebla.obj';
import QueretaroObj from '../obj/Queretaro.obj';
import QuintanaRooObj from '../obj/QuintanaRoo.obj';
import SanLuisPotosiObj from '../obj/SanLuisPotosi.obj';
import SinaloaObj from '../obj/Sinaloa.obj';
import SonoraObj from '../obj/Sonora.obj';
import TabascoObj from '../obj/Tabasco.obj';
import TamaulipasObj from '../obj/Tamaulipas.obj';
import TlaxcalaObj from '../obj/Tlaxcala.obj';
import VeracruzObj from '../obj/Veracruz.obj';
import YucatanObj from '../obj/Yucatan.obj';
import ZacatecasObj from '../obj/Zacatecas.obj';
import Republica from '../obj/Republica.obj';
// import AguascalientesObj from '../obj/Aguascalientes.obj';


//-------
import { OrbitControls } from './OrbitControls';

// import * as OBJLoader from 'three-obj-loader';
// import { MTLLoader } from './Lib/MTLLoader';
// import { FBXLoader } from './Lib/FBXLoader';

import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader';
OBJLoader(THREE);

var controls



var estadoActual;
var objetoACArgar;
class Canvas extends Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  // useStyles = makeStyles((theme) => ({
    // icon: {
    //   marginRight: theme.spacing(2),
    // },
    // heroContent: {
    //   backgroundColor: theme.palette.background.paper,
    //   padding: theme.spacing(8, 0, 6),
    // },
    // heroButtons: {
    //   marginTop: theme.spacing(4),
    // },
    // cardGrid: {
    //   paddingTop: theme.spacing(8),
    //   paddingBottom: theme.spacing(8),
    // },
    // card: {
    //   height: '100%',
    //   display: 'flex',
    //   flexDirection: 'column',
    // },
    // cardMedia: {
    //   paddingTop: '56.25%', // 16:9
    // },
    // cardContent: {
    //   flexGrow: 1,
    // },
    // footer: {
    //   backgroundColor: theme.palette.background.paper,
    //   padding: theme.spacing(6),
    // },
  // }));

  loadFigure(estado){
    switch (estado){
      case "Aguascalientes":
        // alert("se ha seleccionado Aguascalientes");
        objetoACArgar = AguascalientesObj;
        break;
      case "BajaCalifornia":
        // alert("se ha seleccionado BajaCalifornia");
        objetoACArgar = BajaCaliforniaObj;
        break;
      case "BajaCaliforniaSur":
        // alert("se ha seleccionado BajaCaliforniaSur");
        objetoACArgar = BajaCaliforniaSurObj;
        break;
      case "Campeche":
        // alert("se ha seleccionado Campeche");
        objetoACArgar = CampecheObj;
        break;
      case "Chiapas":
        // alert("se ha seleccionado Chiapas");
        objetoACArgar = ChiapasObj;
        break;
      case "Chihuahua":
        // alert("se ha seleccionado Chihuahua");
        objetoACArgar = ChihuahuaObj;
        break;
      case "CiudadDeMexico":
        // alert("se ha seleccionado CiudadDeMexico");
        objetoACArgar = CuidadDeMexicoObj;
        break;
      case "Coahuila":
        // alert("se ha seleccionado Coahuila");
        objetoACArgar = CoahuilaObj;
        break;
      case "Colima":
        // alert("se ha seleccionado Colima");
        objetoACArgar = ColimaObj;
        break;
      case "Durango":
        // alert("se ha seleccionado Durango");
        objetoACArgar = DurangoObj;
        break;
      case "EstadoDeMexico":
        // alert("se ha seleccionado EstadoDeMexico");
        objetoACArgar = EstadoDeMexicoObj;
        break;
      case "Guanajuato":
        // alert("se ha seleccionado Guanajuato");
        objetoACArgar = GuanajuatoObj;
        break;
      case "Guerrero":
        // alert("se ha seleccionado Guerrero");
        objetoACArgar = GuerreroObj;
        break;
      case "Hidalgo":
        // alert("se ha seleccionado Hidalgo");
        objetoACArgar = HidalgoObj;
        break;
      case "Jalisco":
        // alert("se ha seleccionado Jalisco");
        objetoACArgar = JaliscoObj;
        break;
      case "Michoacan":
        // alert("se ha seleccionado Michoacan");
        objetoACArgar = MichoacanObj;
        break;
      case "Morelos":
        // alert("se ha seleccionado Morelos");
        objetoACArgar = MorelosObj;
        break;
      case "Nayarit":
        // alert("se ha seleccionado Nayarit");
        objetoACArgar = NayaritObj;
        break;
      case "NuevoLeon":
        // alert("se ha seleccionado NuevoLeon");
        objetoACArgar = NuevoLeonObj;
        break;
      case "Oaxaca":
        // alert("se ha seleccionado Oaxaca");
        objetoACArgar = OaxacaObj;
        break;
      case "Puebla":
        // alert("se ha seleccionado Puebla");
        objetoACArgar = PueblaObj;
        break;
      case "Queretaro":
        // alert("se ha seleccionado Queretaro");
        objetoACArgar = QueretaroObj;
        break;
      case "QuintanaRoo":
        // alert("se ha seleccionado QuintanaRoo");
        objetoACArgar = QuintanaRooObj;
        break;
      case "SanLuisPotosi":
        // alert("se ha seleccionado SanLuisPotosi");
        objetoACArgar = SanLuisPotosiObj;
        break;
      case "Sinaloa":
        // alert("se ha seleccionado Sinaloa");
        objetoACArgar = SinaloaObj;
        break;
      case "Sonora":
        // alert("se ha seleccionado Sonora");
        objetoACArgar = SonoraObj;
        break;
      case "Tabasco":
        // alert("se ha seleccionado Tabasco");
        objetoACArgar = TabascoObj;
        break;
      case "Tamaulipas":
        // alert("se ha seleccionado Tamaulipas");
        objetoACArgar = TamaulipasObj;
        break;
      case "Tlaxcala":
        // alert("se ha seleccionado Tlaxcala");
        objetoACArgar = TlaxcalaObj;
        break;
      case "Veracruz":
        // alert("se ha seleccionado Veracruz");
        objetoACArgar = VeracruzObj;
        break;
      case "Yucatan":
        // alert("se ha seleccionado Yucatan");
        objetoACArgar = YucatanObj;
        break;
      case "Zacatecas":
        // alert("se ha seleccionado Zacatecas");
        objetoACArgar = ZacatecasObj;
        break;
      default:
        objetoACArgar = Republica;
        break;
    }
  }

  componentDidMount() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
    const cube = new THREE.Mesh(geometry, material)

    this.THREE = THREE


      // Agregando el Objeto Importado (sin color)
    var manager = new this.THREE.LoadingManager()
    var material2 = new THREE.MeshNormalMaterial()
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total )
    }
    var loader = new this.THREE.OBJLoader( manager )
    
    console.log("objeto: " + objetoACArgar)
    loader.load(objetoACArgar, function ( object ) {

    object.traverse( function ( child ) {

      if ( child instanceof THREE.Mesh ) {
          child.material = material2;
      }
    })
    object.material = new THREE.MeshBasicMaterial({wireframe: true})
    scene.add(object)
    })

    //Intento con FBX------------------------
    // var FBXLoader = require('three-fbx-loader');
    // var loader = new FBXLoader();
    // loader.load( './Crab.fbx', function ( object ) {
      // object.traverse( function ( child ) {
      // } );
      // scene.add(object);
    // } );
    //----------------------------------------




// Intento Con MTL & OBJ No funciona 
    // let mtlLoader = new MTLLoader();
    // let objLoader = new OBJLoader();
    // mtlLoader.load(AguascalientesMtl, (materials) => {
    //   materials.preload()
    //   objLoader.setMaterials(materials)
    //   objLoader.load(AguascalientesObj, (object) => {
    //     scene.add(object)
    //   })
    // })



    camera.position.z = 25
    // scene.add(cube)
    renderer.setClearColor('gray')
    renderer.setSize(width, height)

    controls = new OrbitControls( camera, renderer.domElement );


    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.material = material
    this.cube = cube
    this.mount.appendChild(this.renderer.domElement)
    this.start()
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  muestraValor() {
    alert("el valor es: " + estadoActual);
  }

  render() {
    // const classes = this.useStyles();
    this.THREE = THREE;
    const objLoader = new this.THREE.OBJLoader();

    console.log(this.props.location.search);
    var estadoActual = this.props.location.search.substring(1);
    this.loadFigure(estadoActual);
    return (
      <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon />
          <Typography variant="h6" color="inherit" noWrap>
            Proyecto Final Gráficas Computacionales
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Estados de la República 
            </Typography>
            <div >
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="/canvas">
                    Mapa Completo en 3D
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href="/index">
                    Cada Estado
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        <div>
          <br/>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            {estadoActual.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })}
          </Typography>
        </div>
        </div>
        <div style={{width: '100%', marginTop: '10px'}}>
          <div
            style={{ width: '1000px', height: '800px', display: 'table', margin: '0 auto'}}
            ref={(mount) => { this.mount = mount }}
          />
        </div>
      </main>
      {/* Footer */}
      <footer >
        <Typography variant="h6" align="center" gutterBottom>
          Créditos
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Estudiantes del Tecnológico de Monterrey Campus Guadalajara
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">Daniel Lepe Vega</Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">David Javier Pérez Álvarez</Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">Hector Humberto Herrera Macías</Typography>
        {/* <Copyright /> */}
      </footer>
      {/* End footer */}
    </React.Fragment>
    )
  }
}

export default Canvas