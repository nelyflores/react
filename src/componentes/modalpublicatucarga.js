import React from 'react';
import{Modal,Button,ButtonToolbar,  Row, Col,Grid} from 'react-bootstrap';
import '../css/modalpublicatucarga.css';
import Switch from 'react-toggle-switch'
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css";
import Dates from "./datepicker";
import Panelflota from './panelflota';



class Publicatucarga extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            switched: false
        };
    }
    toggleSwitch = () => {
        this.setState(prevState => {
            return {
                switched: !prevState.switched
            };
        });
    };

	render(){
		return(
			<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sm" className="back-modal-form" >
		        <Modal.Header closeButton className="modal-form modal-form-header">
		          <Modal.Title id="contained-modal-title-sm" >PUBLICA TU CARGA</Modal.Title>
		        </Modal.Header>
		        <Modal.Body className="modal-form">
		          	<div className="row">
		          		<span className="required_notification">* Datos Requeridos</span>
		                    <div className="tab-content">
		                      	<div className="tab-pane fade in active" id="home">
		                         	<Row>
						          		<Col xs={12} md={4}>
						          			<div className="control-group ">
						          				<label className="label-pub-form">CATEGORÍA DE TU CARGA<span className="regForm text-danger">*</span></label>
						          				<div className="caja">
								          			<select >
								          				 <option value="0" >Categoría</option>
								          				<option>Perecederos</option>
								          				<option>Materiales de Construcción</option>
								          				<option>Industria de Consumo y Alimentos</option>
								          				<option>Otro</option>

								          			</select>
						          				</div>
						          			</div>
						          		</Col>
						          		<Col xs={12} md={4}>
						          			<div className="control-group">
							          			<label className="label-pub-form">Tipo de vehículo<span className="regForm text-danger">*</span></label>
							          			<div className="caja">
							          				<select>
								          				<option value="0">Tipo</option>
								          				<option value="1">Caja Seca</option>
								          				<option value="2">Caja Refrigerada</option>
								          				<option value="3">Contenedor Intermodal</option>
								          				<option value="4">Vehículo Pequeño</option>
								          				<option value="5">Vehículo Especializado</option>
							          				</select>
							          			</div>

							          			<div className="control-group">
								          			<div className="caja">
								          				<select>
								          					<option>Subtipo</option>
								          					<option>Perecederos</option>
								          					<option>Perecederos</option>
							          					</select>

								          			</div>

							          			</div>
						          			</div>
						          		</Col>
						          		<Col xs={12} md={4}>
						          			<div className="control-group">
						          				<label className="label-pub-form">CATEGORÍA DE TU CARGA<span className="regForm text-danger">*</span></label>
							          				<div className="cajatexto">
							          					<textarea className="input-form-modal" placeholder="Recuerda incluir peso, dimensiones, empaque o embalaje y maniobras necesarias" rows="7" cols="50">
								          				</textarea>

							          				</div>


						          			</div>
						          		</Col>
		          					</Row>

						          	<Row>
						          		<Col xs={12} md={4}>
						          			<div className="control-group">
						          				<label className="label-pub-form" style={{display:"block"}}>Origen <span className="regForm text-danger">*</span></label>
						          				<div className="cajatexto">
						          					<input type="text" className="input-form-modal" placeholder="Ciudad de Origen"/>

						          				</div>

						          			</div>

						          		</Col>
						          		<Col xs={12} md={4}>
						          			<div className="control-group">
						          				<label className="label-pub-form" style={{display:"block"}}>Destino <span className="regForm text-danger">*</span></label>
							          			<div className="cajatexto">
							          				<input type="text" className="input-form-modal" placeholder="Ciudad de Destino"/>

							          			</div>

						          			</div>

						          		</Col>
						          		<Col xs={12} md={4}>
						          			<div className="control-group">
						          				<label className="label-pub-form" style={{display:"block"}}>Fecha <span className="regForm text-danger">*</span></label>
						          					<Dates />
						          			</div>
						          		</Col>
						          	</Row>
						          	<Row>
						          		<Col xs={12} md={6}>
						          			<div className="control-group">
						          				<label className="label-pub-form" style={{display:"block"}}>Tarifa <span className="regForm text-danger">*</span></label>
							          			<div className="cajatexto">
							          				<input type="text" className="input-form-modal" placeholder="$ (opcional) sin I.V.A."/>

							          			</div>

						          			</div>

						          		</Col>
						          		<Col xs={12} md={6} style={{marginTop:"33px"}}>
		          							<Switch onClick={this.toggleSwitch} on={this.state.switched}>
              								<i className="some-icon"/>
            								</Switch>
            								<span  className="label-pub-form">ACEPTO <a  className="label-pub-form">TERMINOS, CONDICIONES</a> Y <a  className="label-pub-form"> AVISO DE PRIVACIDAD <span className="regForm text-danger">*</span></a></span>
		          						</Col>
						          	</Row>
		                      	</div>
							</div>
					</div>
		        </Modal.Body>
		        <Modal.Footer className="modal-form">
		          <Button onClick={this.props.onHide}>Close</Button>
		        </Modal.Footer>
		    </Modal>
		);
	}
}

class Registratuflota extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            switched: false
        };
    }

    toggleSwitch = () => {
        this.setState(prevState => {
            return {
                switched: !prevState.switched
            };
        });
    };

	render(){
		return(
			<Modal {...this.props} aria-labelledby="contained-modal-title-sm" className="back-modal-form" >
		        <Modal.Header closeButton className="modal-form-header">
		          <Modal.Title id="contained-modal-title-sm">PUBLICA TU FLOTA</Modal.Title>
		        </Modal.Header>
		        <Modal.Body className="modal-form">

			        	<Row>
		          		<Col xs={12} md={4}>
		          			<div className="control-group">
		          			<label className="label-pub-form">Nombre <span className="regForm text-danger">*</span></label>
		          			<input type="text" placeholder="Nombre" className="input-form-modal"/>
		          			</div>
		          		</Col>
		          		<Col xs={12} md={4}>
		          				<div className="control-group">
		          			<label className="label-pub-form">Apellido Paterno <span className="regForm text-danger">*</span></label>
		          			<input type="text" placeholder="Apellido Paterno" className="input-form-modal"/>
		          			</div>
		          		</Col>
		          		<Col xs={12} md={4}>
		          				<div className="control-group">
		          			<label className="label-pub-form">Apellido Materno <span className="regForm text-danger">*</span></label>
		          			<input type="text" placeholder="Apellido Materno" className="input-form-modal"/>
		          			</div>
		          		</Col>
		          	</Row>

		          	<Row>
		          		<Col xs={12} md={4}>
		          			<div className="control-group">
		          			<label className="label-pub-form">Correo Electronico <span className="regForm text-danger">*</span></label>
		          			<input type="text" placeholder="micorreo@dominio.com" className="input-form-modal"/>
		          			</div>

		          		</Col>
		          		<Col xs={12} md={4}>
		          			<div className="control-group">
		          			<label className="label-pub-form">NÚMERO CELULAR <span className="regForm text-danger">*</span></label>
		          			<input type="text" placeholder="5512345678" className="input-form-modal"/>
		          			</div>

		          		</Col>

		          	</Row>
		          	<Row>
		          		<Col xs={12} md={4}>
		          			<Panelflota name='Caja Seca' idflota='1' />
		          			<Panelflota name='Caja Refrigerada' idflota='2'/>
		          			<Panelflota />
		          			
		          		</Col>
		          			<Col xs={12} md={4}>
		          			<Panelflota />
		          			<Panelflota />
		          			<Panelflota />
		          		</Col>
		          		<Col xs={12} md={4}>
		          			<Panelflota />
		          			<Panelflota />
		          			<Panelflota />
		          		</Col>
		          		<Col xs={12} md={4}>
		          			<div className="checkbox checkbox-success">
										<input type="checkbox" id="consolidado"/>
      							<label className="label-pub-form" htmlFor="consolidado">
        						 CONSOLIDADO
      							</label>
    						</div>
		          		</Col>
		          	</Row>
		          	<Row>
		          		<Col xs={12} md={12}>
		          			<Switch onClick={this.toggleSwitch} on={this.state.switched}>
              					<i className="some-icon"/>
            				</Switch>
            				<span  className="label-pub-form">ACEPTO <a  className="label-pub-form">TERMINOS, CONDICIONES</a> Y <a  className="label-pub-form"> AVISO DE PRIVACIDAD <span className="regForm text-danger">*</span></a></span>
		          		</Col>
		          	</Row>






		        </Modal.Body>
		        <Modal.Footer className="modal-form">
		          <Button onClick={this.props.onHide}>Guarda tu Flota</Button>
		        </Modal.Footer>
		      </Modal>


			);

	}

}

export default class Modalpublicatucarga extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            smShow: false,
            lgShow: false
	    };
    }
    render() {
        let smClose = () => this.setState({ smShow: false });
	    let lgClose = () => this.setState({ lgShow: false });
	    return (
	        <div className="trans">
                <ButtonToolbar>
                    <Button className="btn_pub btn_pub-carga btn-verde text-center"
                            onClick={() => this.setState({ smShow: true })}>
                        Publica tu carga
                    </Button>
                    <Button className="btn_pub btn_pub-flota btn-verde text-center"
                            onClick={() => this.setState({ lgShow: true })}>
                        Registra tu flota
                    </Button>

                    <Publicatucarga show={this.state.smShow} onHide={smClose} />
                    <Registratuflota show={this.state.lgShow} onHide={lgClose} />
                </ButtonToolbar>
            </div>
        );
    }
}
