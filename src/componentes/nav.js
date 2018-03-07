import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import {Navbar,NavItem,Nav} from 'react-bootstrap';
import Login from './login';
import Registro from './registro';
import '../css/cabecera.css';
import Logo from '../img/sendengo-logotipo-blanco.png';
import Modalpublicatucarga from './modalpublicatucarga';
import Contactanos from '../contenedores/contactanos';
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Navegacion extends React.Component {

    render() {


        return (

          <Navbar className="navbar-fixed-top nav">
              <Navbar.Header>
                  <Navbar.Brand className="logo-mobile">
                      <img src={Logo} className="logotipo"/>
                  </Navbar.Brand>
              </Navbar.Header >

              <Nav className="navbar-right hidden-xs">
                  <NavItem eventKey={2} href="#" className={this.props.className} >
                    <Modalpublicatucarga/>
                  </NavItem>
                  <NavItem eventKey={4} href="#" className="navbar-text navbar-right" >
                    <Login/>
                  </NavItem>
                  <NavItem eventKey={3} href="#" className="navbar-text navbar-right" >
                    <Registro/>
                  </NavItem>
                  <NavItem eventKey={5} href="#contactanos" className="navbar-text navbar-right contactanos" componentClass="span">
                      <a href="#contactanos">Contactanos</a>

                  </NavItem>


                </Nav>







          </Navbar>



        );
    }
}
