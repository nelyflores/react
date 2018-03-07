import React from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import '../css/contacto.css';

let FaMapMarker = require('react-icons/lib/fa/map-marker');
let MdPhone =require('react-icons/lib/md/phone');
let GoMail = require('react-icons/lib/go/mail');

export default class Contacto extends React.Component{
	constructor(props){
		super(props);
		this.state = {value:''};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit= this.handleSubmit.bind(this)
	}
	handleChange(e){
		this.setState({value: e.target.value});
	}
	handleSubmit(e){
		e.preventDefault();
		console.log("listo");

	}
	render(){
		return(


			<Grid>
				<Row>
					<Col xs={12} md={12}>
						<h2 className="text-center">¡CONTÁCTANOS!</h2>
						<p className="text-center">Déjanos tus datos y así podamos resolver tus dudas</p>
						 <span className="required_notification">* Datos Requeridos</span>

					</Col>
				</Row>
				<Row>
					<Col xs={12} md={8}>
						<Row>
							<form onSubmit={this.handleSubmit} className="contact_form">
								<Col xs={12} md={6}>
									<div className="form-group">
										<label htmlFor="name" className="text-left label-contacto">Nombre<span className="regForm text-danger">*</span></label>
										<input className="form-control" id="name" placeholder="Ingresa tu nombre" required="required" onChange= {this.handleChange}/>
									</div>
									<div className="form-group">
										<label htmlFor="telefono" className="text-left label-contacto" >Telefono<span className="regForm text-danger">*</span></label>
										<input type="tel" className="form-control" id="telefono" placeholder="Ingresa tu telefono" required="required" maxLength="10" onChange= {this.handleChange}/>
										<span className="form_hint">Telefono de 10 digitos</span>
									</div>
									<div className="form-group">
										<label htmlFor="email" className="text-left label-contacto">Correo <span className="regForm text-danger">*</span></label>
										<input type="email" className="form-control" id="email" placeholder="Ingresa tu Correo"  pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$" required="required" title="email valido necesitas colocar @ y un ."onChange= {this.handleChange}/>
										 <span className="form_hint">Escribe tu correo "name@something.com"</span>
									</div>
								</Col>
								<Col xs={12} md={6}>
									<div className="form-group">
										<label htmlFor="mensaje" className="text-left label-contacto">Comentarios <span className="regForm text-danger">*</span></label>
										<textarea placeholder="Deja tu mensaje" className="form-control" rows={9} cols={25} required="required" id="mensaje" onChange= {this.handleChange}/>
									</div>

									<button className="btn btn-default btn-contactanos"  type ="submit" value="submit" >Enviar Mensaje</button>
								</Col>
							</form>
						</Row>
					</Col>
					<Col xs={12} md={4}>
						<address className="text-center">
  							<FaMapMarker className="label-contacto"/> <strong className="label-contacto">Direccion</strong><br/>
  							Paseo de la Reforma #23<br/>
  							Col.Tabacalera C.P. 06700<br/>

						</address>
						<address className="text-center">
  							<MdPhone className="label-contacto"/> <strong className="label-contacto">Telefonos</strong><br/>
  							55 55 10 06 87<br/>
  							55 55 10 11 28<br/>

						</address>
						<address className="text-center" >
  							<GoMail className="label-contacto"/> <strong className="label-contacto">Email</strong><br/>
  							micorreo@hotmail.com<br/>

						</address>
					</Col>
				</Row>
			</Grid>

		)
	}
}
