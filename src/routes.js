import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Contactanos from'./contenedores/contactanos';

const Routes = () =>(
  <BrowserRouter>
  <Switch>
  <Route  path='/contactanos' component={Contactanos}/>
  </Switch>
  </BrowserRouter>


);
export default Routes;
