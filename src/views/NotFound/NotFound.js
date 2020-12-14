import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 20,
  },
  content: {
    paddingTop: 150,
    textAlign: 'center'
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));

const NotFound = () => {
  const classes = useStyles();

  document.title = "Not Found";

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        spacing={4}
      >
        <Grid
          item
          lg={6}
          xs={12}
        >
          <div className={classes.content}>
            <Typography variant="h1">
              404: La página que estás buscando no está aquí.
            </Typography>
            <Typography variant="subtitle2">
              Ingresaste una URL no aceptable o viniste aquí por error.
              Cualquiera que sea, intente ir al {` `}
              <Link
                component={RouterLink}
                to="/"
                underline="always"
              >
                {`Home`}
              </Link>.
            </Typography>
            {/* <img
              alt="Under development"
              className={classes.image}
              src="/images/undraw_page_not_found_su7k.svg"
            /> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;