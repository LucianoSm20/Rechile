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
import Pregunta from '../Preguntas/Pregunta.js'
import SaveIcon from '@material-ui/icons/Save';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { NavLink as RouterLink } from 'react-router-dom';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import AcUnitIcon from '@material-ui/icons/AcUnit';



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





const LvlBajo = () => {
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
        await db.collection("lvlbajo1").onSnapshot((querySnapshot) => {
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
                    <Pregunta setRespuesta = {setRespuesta} datos = {datos[i]} />
                    
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
            setPregunta(4);
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

    const [ puntosFlag, setPuntosFlag] = useState(['disabled','disabled','disabled','disabled'])
    const [ resultadoFinal, setResultadoFinal] =useState(0)

    const [puntos, setPuntos] = useState([0,0,0,0,0])
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
                    Instrucciones  de uso para Nivel bajo
                    </DialogTitle>
                    <DialogContent dividers>
                    <Typography gutterBottom>
                        Elementos: Se presenta un mapa y una pregunta con 4 alternativas.
                    </Typography>
                    <Typography gutterBottom>
                        Selección: Debes marcar una de las 4 alternativas, respecto a la zona natural que presenta el mapa.
                    </Typography>
                    <Typography gutterBottom>
                        Pista: Obten una ayuda extra clickeando la pista que hay por cada pregunta realizada.
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
                    Juego finalizado, tus medallas por zona han sido: 
                    </DialogTitle>
                    <DialogContent dividers>
                    <Typography gutterBottom>
                       
                    </Typography>
                         
                        <div className={classes.section3}>
                            <h3>01</h3>
                            <BrightnessHighIcon color= {puntosFlag[0]} style={{ fontSize: 40 }} />
                            <h3>02</h3>
                            <BrightnessMediumIcon color={puntosFlag[1]} style={{ fontSize: 40 }}/>
                            <h3>03</h3>
                            <LocalFloristIcon color={puntosFlag[2]} style={{ fontSize: 40 }}/>
                            <h3>04</h3>
                            <Brightness3Icon color={puntosFlag[3]} style={{ fontSize: 40 }}/>
                            <h3>05</h3>
                            <AcUnitIcon color={puntosFlag[4]} style={{ fontSize: 40 }}/>
                        </div>
                        
                    </DialogContent>
                    <DialogActions>

                    <RouterLink
                        activeClassName={classes.active}
                        className={classes.boton}
                        underline="none"
                        to='/lvlintermedio'
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

export default LvlBajo;