import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import water from './../../img/image1.png';
import logo from './../../img/logo.png';
import Button from '@material-ui/core/Button';
import { blue, red, teal } from '@material-ui/core/colors';
import { Box, DialogTitle, Dialog, Avatar, List, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import IconButton from '@material-ui/core/IconButton';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    bg: { 
        backgroundImage: `url(${water})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        height: 1356,
        display: 'flex',
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

    root: {
        height: '100vh',
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
        height: 340,
        width: 420,
        display: 'flex',
    },

    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },

    button: {
        color: blue[800],
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        // fontWeight: theme.typography.fontWeightMedium
    },
    
    active: {
        background: teal[50],
        color: teal[700],
        // fontWeight: theme.typography.fontWeightMedium,
        '& $icon': {
            color: teal[700]
        }
    }


}));

const dificultad = ['Bajo', 'Intermedio', 'Alto'];

function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        let url = '/not-found'
        
        if(value==='Bajo'){
            url = '/lvlbajo'
        }
        else if(value==='Intermedio'){
            url = '/lvlintermedio'
        }
        else if (value==='Alto'){
            url = '/lvlalto'
        }

        return (url)
        
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Selecciona el nivel</DialogTitle>
        <List>
            {dificultad.map((dificultad) => (
            <ListItem button onClick={() =>  handleListItemClick(dificultad)} key={dificultad}>
                <RouterLink
                    activeClassName={classes.active}
                    className={classes.button}
                    underline="none"
                   // component={handleListItemClick}
                    to={handleListItemClick(dificultad)}
                >
                    {dificultad}
                </RouterLink>
                
            </ListItem>
            
            ))}
    
        </List>
        </Dialog>
    );
}


function SimpleDialogQ(props) {
    const classes = useStyles();
    const { onCloseQ, openQ } = props;

    const handleCloseQ = () => {
        onCloseQ(false);
    };


    return (
        <Dialog onClose={handleCloseQ} aria-labelledby="simple-dialog-title" open={openQ}>
        <DialogTitle id="simple-dialog-title">¿Que es ReChile?</DialogTitle>
        <List>
            
            <ListItem >
                ReChile es una herramienta que te propone asociar el mapa y ubicación geografica
                de cada región con sus respectivos nombres. Además puedes demostrar tu concimiento de
                cada region en ambitos como el clima, producciones primarias y secundarias, actividad economica,
                edificaciones y zonas tipicas u otras caracteristicas destacadas de cada región.
                
            </ListItem>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>¿Que es una región?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Una región es una división terriroral propia de un país, estas a su vez de dividen en provincias
                las cuales se subdividen en comunas. Chile cuenta con 16 regiones las que estan presenten es 3
                distintos continentes (América, Oceanía y Antartica)
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>¿Que es la regionalizacion?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  La idea de establecer una organización territorial basada en regiones surgio a 1950, por parte del 
                  corfo y la Odeplan, quienes propusieron 7 grandes regiones, esto fue formalizado por el decreto
                  n°1.104 en 1969, donde ademas se indicarion nuevas divisiones, estableciendo una oganizacion basada en
                  13 provicianas. Luego en 1976 se nombra a cada region de acuerdo a su mas grande provincia y se 
                  les asigna un numero de acuerdo a su ubicación. Finalmente luego de las reestructuraciones del 2007 y 2017
                  Chile pasa a tener 16 regiones y se elimina de forma definitiva su numeración.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>¿Que son las regiones naturales?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Las regiones naturales son divisiones en un territorio en base a su variedad de climas. En Chile hay presente
                  5 regiones naturales.
                </Typography>
              </AccordionDetails>
            </Accordion>

              
           
        </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};


const Home = () => {

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = React.useState(dificultad[1]);
    const [openQ, setOpenQ] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    const handleClickOpenQ = () => {
        setOpenQ(true);
    };

    const handleCloseQ = (value) => {
        setOpenQ(false);
    };

    const classes = useStyles();
    document.title = "ReChile";

    return(
        <div className={classes.bg}>
            <div className={classes.content}>
                <Box className={classes.root} display="flex" justifyContent="center" alignItems="center" flexDirection= 'column'>
                    <Avatar variant="rounded" alt="ReChile" src={logo} className={classes.avatar1} />
                    <Box display="flex" justifyContent="center" m={1} p={1}>
                        <Button
                            type="submit"
                            autoFocus
                            variant="contained"
                            color="secondary"
                            className={classes.buttonForm}
                            onClick={handleClickOpen}
                        >
                            Jugar!
                        </Button>
                        <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
                    </Box>

                    <IconButton 
                        aria-label="question"  
                        color="primary" 
                        size="medium"
                        onClick={handleClickOpenQ}
                    >
                        <ContactSupportIcon />
                    </IconButton>
                    <SimpleDialogQ openQ={openQ} onCloseQ={handleCloseQ} />
                </Box>
            </div>
        </div>
    );
    
};


export default Home;