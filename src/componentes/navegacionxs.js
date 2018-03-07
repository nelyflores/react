import React from 'react';
import { Navbar, NavItem,  Nav } from 'react-bootstrap';
import Login from './login';
import Registro from './registro';
import '../css/navegacionxs.css';
import Logo from '../img/sendengo-logotipo-blanco.png';

export default class Navegacionxs extends React.Component {
	render(){
		return(
			 <div className=" visible-xs navegacion-xs">

                  <Nav className="navbar-right ">
                  <NavItem eventKey={1} href="#" className={this.props.className}>
                      <button className="btn_pub">Publica tu carga</button>
                    </NavItem>
                    <NavItem eventKey={2} href="#" className={this.props.className} >
                      <button className="btn_pub">Registra tu Flota</button>
                    </NavItem>
                    <NavItem eventKey={3} href="#" className="navbar-text navbar-right" >
                      <button className="btn_pub">Registra tu Flota</button>
                    </NavItem>
                    <NavItem eventKey={4} href="#" className="navbar-text navbar-right" >
                       <button className="btn_pub">Login</button>

                    </NavItem>

                  </Nav>
            </div>

		)
	}
}
