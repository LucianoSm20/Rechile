import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import water from './../../img/image1.png';
import logo from './../../img/logo.png';
import Button from '@material-ui/core/Button';
import { blue, red, teal } from '@material-ui/core/colors';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { Typography, Dialog, Avatar, DialogTitle, Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {storage} from './../../firebase'
import {db} from './../../firebase'
import PreguntaInter from '../Preguntas/PreguntaInter.js'
import SaveIcon from '@material-ui/icons/Save';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { NavLink as RouterLink } from 'react-router-dom';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import SatelliteIcon from '@material-ui/icons/Satellite';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import PoolIcon from '@material-ui/icons/Pool';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import PetsIcon from '@material-ui/icons/Pets';
import CloudIcon from '@material-ui/icons/Cloud';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import LeakRemoveIcon from '@material-ui/icons/LeakRemove';
import NatureIcon from '@material-ui/icons/Nature';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';



const useStyles = makeStyles(theme => ({
    bg: { 
        backgroundImage: `url(${water})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        height: 1356,
        display: 'flex',
        flexDirection: 'column',
    }, 

    logo: { 
        backgroundImage: `url(${logo})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
        marginTop: '-300px',
        display: 'flex',
    },

    buttonForm: {
        fontWeight: '300 !important',
        background: red[700],
        height: 60,
        width: 160,
        '&:hover': {
          background: red[700],
        }, 
    },

    button: {
        fontWeight: '300 !important',
        background: teal[700],
        margin: 20,
        marginTop: 40,
        position: 'absolute',
        right: theme.spacing(1),
        height: 60,
        width: 160,
        '&:hover': {
          background: blue[700],
        }, 
    },

    root: {
        margin: 0,
        padding: theme.spacing(2),
    },

    content: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'center',
        marginTop: '-300',
    },

    avatar1: {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: 140,
        width: 180,
        display: 'flex',
      },

    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },

    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    section1: {
        margin: theme.spacing(1,2),
        width:theme.spacing(200),
        height: theme.spacing(1, 2),
        display: 'flex',
        flexDirection: 'row',
    },
    section2: {
        margin: theme.spacing(1, 2),
        minHeight: '666px'
    },
    section3: {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-around' 
    },

    bigButton: {
        padding: '20px',

    },

    boton: {
        margin: theme.spacing(1),
    }

}));

  
const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);





const LvlIntermedio = () => {
    const classes = useStyles();
    console.log('render component')
    const [ready, setReady] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setOpenFinal(false);
        setResultadoFinal(0);
    };

    const [datos, setDatos] = useState([]);

    const [preguntaActual, setPregunta] = useState(0);
   
   // let starsRef = storage.refFromURL('gs://rechile-28a41.appspot.com/Antofagasta.svg.png');


    const getDatos = async () => {
        await db.collection("lvlmedio1").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id});
            });
            setDatos(docs)
            console.log("respuesta");
            console.log(docs)
            setReady(true);
        })
    }

    useEffect(() => {
        getDatos();
    }, []);

    function showPregunta(){
        if (ready){
            let i = preguntaActual;
            
            if (datos !== undefined) {
                return(
                    <PreguntaInter setRespuesta = {setRespuesta} datos = {datos[i]} />
                    
                );
            }
        } 
    }

    function nextQuestion() {
        if (preguntaActual < datos.length - 1) {
            setPregunta(preguntaActual + 1)
        } else {
            setPregunta(0);
        }
    }

    function backQuestion() {
        if (preguntaActual < datos.length  && preguntaActual > 0 ) {
            setPregunta(preguntaActual - 1)
        } else {
            setPregunta(15);
        }
    }

    function setRespuesta(value, respuesta) {
        console.log('lvlBajo:', respuesta)
        if (respuesta === value ){
            puntos[preguntaActual] = 1
        }
        else{
            puntos[preguntaActual] = 0
        }
    } 

    const [openFinal, setOpenFinal] = useState(false);
    const handleClickOpenFinal = () => {
        let count = 0
        
        puntos.forEach((current) =>{
            if (current === 1 ){
               puntosFlag[count]='primary';
               console.log(resultadoFinal)
            }
            else{
                puntosFlag[count]='disabled';
            }
            count = (count+1);
        });
        setOpenFinal(true);
    };

    const [ puntosFlag, setPuntosFlag] = useState(['disabled','disabled','disabled','disabled', 'disabled','disabled','disabled','disabled', 'disabled','disabled','disabled','disabled', 'disabled','disabled','disabled','disabled'])
    const [ resultadoFinal, setResultadoFinal] =useState(0)

    const [puntos, setPuntos] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    console.log(puntos)

    return(
        <div className={classes.bg}>
            <div className={classes.section1}>
                <Avatar variant="rounded" alt="ReChile" src={logo} className={classes.avatar1} />     
                <Button className={classes.button} variant="contained" color="secondary" onClick={handleClickOpen}>
                    Instrucciones
                </Button>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Instrucciones  de uso para Nivel intermedio
                    </DialogTitle>
                    <DialogContent dividers>
                    <Typography gutterBottom>
                        Elementos: Se presenta un mapa y una pregunta con 4 alternativas.
                    </Typography>
                    <Typography gutterBottom>
                        Selección: Debes marcar una de las 4 alternativas, respecto a la región que presenta el mapa.
                    </Typography>
                    <Typography gutterBottom>
                        Pistas: Obten una ayuda extra clickeando las pista de
                        equipo representativo de la region o las edificaciones y zonas típicas
                        que hay por cada pregunta realizada.
                    </Typography>
                    </DialogContent>
                    <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Entiendo
                    </Button>
                    </DialogActions>
                </Dialog>

                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openFinal}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Juego finalizado, tu medallas por zona sido: 
                    </DialogTitle>
                    <DialogContent dividers>
                    <Typography gutterBottom>
                       
                    </Typography>
                         
                        <div className={classes.section3}>
                            <h3>01</h3>
                            <Brightness5Icon color= {puntosFlag[0]} style={{ fontSize: 40 }} />
                            <h3>02</h3>
                            <SatelliteIcon color={puntosFlag[1]} style={{ fontSize: 40 }}/>
                            <h3>03</h3>
                            <FilterHdrIcon color={puntosFlag[2]} style={{ fontSize: 40 }}/>
                            <h3>04</h3>
                            <SportsBasketballIcon color={puntosFlag[3]} style={{ fontSize: 40 }}/>
                            <h3>05</h3>
                            <PoolIcon color= {puntosFlag[4]} style={{ fontSize: 40 }} />
                            <h3>06</h3>
                            <BeachAccessIcon color={puntosFlag[5]} style={{ fontSize: 40 }}/>
                            <h3>07</h3>
                            <BusinessCenterIcon color={puntosFlag[6]} style={{ fontSize: 40 }}/>
                            <h3>08</h3>
                        </div>
                        <div className={classes.section3}>
                            <AllInclusiveIcon color={puntosFlag[7]} style={{ fontSize: 40 }}/>
                            <h3>09</h3>
                            <PetsIcon color= {puntosFlag[8]} style={{ fontSize: 40 }} />
                            <h3>10</h3>
                            <CloudIcon color={puntosFlag[9]} style={{ fontSize: 40 }}/>
                            <h3>11</h3>
                            <AccountBalanceIcon color={puntosFlag[10]} style={{ fontSize: 40 }}/>
                            <h3>12</h3>
                            <FilterVintageIcon color={puntosFlag[11]} style={{ fontSize: 40 }}/>
                            <h3>13</h3>
                            <ClearAllIcon color= {puntosFlag[12]} style={{ fontSize: 40 }} />
                            <h3>14</h3>
                            <LeakRemoveIcon color={puntosFlag[13]} style={{ fontSize: 40 }}/>
                            <h3>15</h3>
                            <NatureIcon color={puntosFlag[14]} style={{ fontSize: 40 }}/>
                            <h3>16</h3>
                            <DirectionsBoatIcon color={puntosFlag[15]} style={{ fontSize: 40 }}/>
                        </div>
                        
                    </DialogContent>
                    <DialogActions>

                    <RouterLink
                        activeClassName={classes.active}
                        className={classes.boton}
                        underline="none"
                        to='/lvlalto'
                    >
                        Ir al siguiente nivel
                    </RouterLink>

                    <RouterLink
                        activeClassName={classes.active}
                        className={classes.boton}
                        underline="none"
                        to='/home'
                    >
                        Volver el inicio
                    </RouterLink>
                   
                    </DialogActions>
                </Dialog>
                
            </div>
            
            <div className={classes.section2}>
                <Divider variant="middle" />
                    {//console.log(datos)
                    }
                    {showPregunta()
                    }
                
            </div>

            <div className={classes.section3}>

                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={backQuestion}
                    className={classes.boton}
                >
                    Anterior
                </Button>

                <Button 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    onClick={nextQuestion}
                    className={classes.bigButton}
                >
                    Siguiente
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={handleClickOpenFinal}
                    className={classes.boton}
                    startIcon={<SaveIcon />}
                >
                    Finalizar juego
                </Button>
            </div>
        </div>
    );
}


export default LvlIntermedio;