import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../css/faqs.css';


import Encuentra from '../img/scheme.svg';
import Crece from '../img/man-succesing.svg';
var FaTruck= require('react-icons/lib/fa/truck');
var MdDevices = require('react-icons/lib/md/devices');
var GoArrowUp = require('react-icons/lib/go/arrow-up');
var GoPerson = require('react-icons/lib/go/person')
export default class Faq extends React.Component{
	render(){
		return(
			<Grid>
			  <Row className="show-grid">
   				 	<Col xs={12} md={12}>
      					<h2 className="text-center">¿Cómo funciona?</h2>
    				</Col>
  				</Row>
  				<Row>
  					<Col xs={12} md={4}>
              <div className="card-base">
                <div className="card-icon">
                  <a title="Widgets" id="widgetCardIcon" className="imagecard"><span ><MdDevices /></span></a>
                  <div className="card-data widgetCardData">
                      <h2 className="box-title" >PUBLICA</h2>
                      <p className="card-block text-center"><strong>Dinos que quieres transportar.</strong><br/>Espera a que te contacten transportistas.</p>
                  </div>
                </div>
                 <div className="space"></div>
              </div>
    				</Col>
    				<Col xs={12} md={4}>
      					<div className="card-base">
                  <div className="card-icon">
                    <a title="Widgets" id="widgetCardIcon" className="imagecard"><span ><FaTruck /></span></a>
                    <div className="card-data widgetCardData">
                      <h2 className="box-title" >ENCUENTRA</h2>
                      <p className="card-block text-center"><strong>Accede a cargas de todo tipo de clientes..</strong><br/>Sendengo ordena las más atractivas para ti.</p>
                    </div>
                  </div>
                  <div className="space"></div>
                </div>
    				</Col>
    				<Col xs={12} md={4}>
              <div className="card-base">
                  <div className="card-icon">
                    <a title="Widgets" id="widgetCardIcon" className="imagecard"><span ><GoArrowUp /></span></a>
                    <div className="card-data widgetCardData">
                      <h2 className="box-title" >CRECE</h2>
                      <p className="card-block text-center"><strong>Aprovecha nuestras herramientas.</strong><br/>y ofrece cada vez un mejor servicio.</p>
                    </div>
                  </div>
                  <div className="space"></div>
              </div>
    				</Col>
  				</Row>
			</Grid>


		)
	}
}
