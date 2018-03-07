import React from 'react';
import { ButtonToolbar, Col,Row,DropdownButton,Button, Panel} from 'react-bootstrap';

import '../css/login.css';

let FaFacebook = require('react-icons/lib/fa/facebook');
let FaTwitter =require('react-icons/lib/fa/twitter');


export default class Registro extends React.Component {
	constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }
	render(){
		return(


				  <div>
					     <Button onClick={() => this.setState({ open: !this.state.open })}>
          					Click to toggle
        				</Button>
        				<Panel id="collapsible-panel-example-2" expanded={this.state.open} style={{position:"absolute"}}>
          						<Panel.Collapse>
            						<Panel.Body>
									    <Row className="login-form"  style={{color:"#37aa31"}}>
											<Col>
												<h2 className="text-center">Sendengo</h2>
												<div className="social-buttons">
													<span><a href="#" className="btn btn-fb"><FaFacebook/>Facebook</a></span>
													<span><a href="#" className="btn btn-tw"><FaTwitter/> Twitter</a></span>
												</div>
												<hr/>
												REGISTRATE
												 <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="registro-nav">
														<div className="form-group">
															 <label className="sr-only" htmlFor="inputEmail">Correo Electronico</label>
															 <input type="email" className="form-control" id="inputEmail" placeholder="correo electronico" required/>
														</div>
														<div className="form-group">
															 <label className="sr-only" htmlFor="inputName">Nombre</label>
															 <input type="email" className="form-control" id="inputName" placeholder="Nombre(s)" required/>
														</div>
														<div className="form-group">
															 <label className="sr-only" htmlFor="inputApellidoPaterno">Apellido Paterno</label>
															 <input type="email" className="form-control" id="inputApellidoPaterno" placeholder="Apellido Paterno" required/>
														</div>
														<div className="form-group">
															 <label className="sr-only" htmlFor="inputApellidoMaterno">Apellido Materno</label>
															 <input type="email" className="form-control" id="inputApellidoMaterno" placeholder="Apellido Materno" required/>
														</div>
														<div className="form-group">
															 <label className="sr-only" htmlFor="inputTelefono">Apellido Paterno</label>
															 <input type="email" className="form-control" id="inputTelefono" placeholder="Numero de telefono" required/>
														</div>
														<div className="form-group">
															 <label className="sr-only" htmlFor="inputPassword">Password</label>
															 <input type="password" className="form-control" id="inputPassword" placeholder="Password" required/>
				                                             <div className="help-block text-right"><a href="" style={{color:"#37aa31"}}>Olvidaste tu contraseña?</a></div>
														</div>
														<div className="form-group">
															 <button type="submit" className="btn btn-primary btn-block btn-registro">Registrate</button>
														</div>

												 </form>
											</Col>
											<div className="bottom text-center">

											</div>
								 		</Row>
								 	</Panel.Body>
          						</Panel.Collapse>
        					</Panel>

  					</div>








			)

		}

}
