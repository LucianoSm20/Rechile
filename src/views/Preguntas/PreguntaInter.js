import React, { useState, Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    mg: {
        margin: '30px',
        display: 'flex',
        justifyContent: 'space-around'
      },
    content: {
       display: 'flex',
       justifyContent: 'center',

    }
  });



const PreguntaInter = (props) => { 

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    console.log(props)

    const [value, setValue] = useState(0);  

    const handleChange = (event) => {
      setValue(event.target.value);
      props.setRespuesta(event.target.value, props.datos.respuesta) 
    };

    return(
        <div className= {classes.mg}>
            <Grid container direction="row" justify="space-evenly"  alignItems="center" item xs={6}>
             <img variant="rounded" alt="ReChile" src= {props.datos.url_img}  />  
            </Grid>
            <Grid container direction="row" justify="space-evenly"  alignItems="center" item xs={6}>
                  <Card className={classes.root}>
                      <CardContent>

                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                          Pregunta: {props.datos.id}
                          </Typography>

                          <Typography variant="h5" component="h2" >
                          {props.datos.sentencia}
                          </Typography>

                          <Typography className={classes.pos} component={'span'} color="textSecondary">
                          <FormControl component="fieldset">
                              <FormLabel component="legend"></FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                  <FormControlLabel value={props.datos.opciones[0]} control={<Radio />} label={props.datos.opciones[0]} />
                                  <FormControlLabel value={props.datos.opciones[1]} control={<Radio />} label={props.datos.opciones[1]} />
                                  <FormControlLabel value={props.datos.opciones[2]} control={<Radio />} label={props.datos.opciones[2]} />
                                  <FormControlLabel value={props.datos.opciones[3]} control={<Radio />} label={props.datos.opciones[3]} />
                                </RadioGroup>
                            </FormControl>
                          </Typography>


                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography className={classes.heading}>Equipo representativo de la región</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                {props.datos.dato_deportivo}
                              </Typography>
                            </AccordionDetails>
                          </Accordion>

                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography className={classes.heading}>Edificaciones y zonas típicas</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                {props.datos.edificaciones_zona_tipica}
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          
                      
                      </CardContent>
                      <CardActions>
                          
                      </CardActions>
                      </Card>
              </Grid>
          
        </div>
    )




}

export default PreguntaInter;