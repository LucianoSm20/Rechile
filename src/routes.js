import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';


import {
  // Vistas publicas
  Home as HomeView,
  LvlBajo as LvlBajoView,
  LvlIntermedio as LvlIntermedioView,
  LvlAlto as LvlAltoView,
  NotFound as NotFoundView,

} from './views';

const Routes = () => {

  return (
  <Fragment>
    <CssBaseline />
    <Switch>
      <Route component={HomeView} exact path="/" />
      <Route component={HomeView} exact path="/home" />
      <Route component={LvlBajoView} exact path="/lvlbajo" />
      <Route component={LvlIntermedioView} exact path="/lvlintermedio" />
      <Route component={LvlAltoView} exact path="/lvlalto" />
      <Route component={NotFoundView} exact path="/not-found" />
      <Redirect exact to="/not-found"/>
      </Switch>
  </Fragment>
  )
};

export default Routes;