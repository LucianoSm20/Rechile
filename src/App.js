import React from 'react';
import  { BrowserRouter as  Router }  from 'react-router-dom';
//import { createBrowserHistory } from 'history';
import Routes from './routes';


//const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
