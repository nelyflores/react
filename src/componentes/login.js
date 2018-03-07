import React from 'react';
import { ButtonToolbar, Col,Row,DropdownButton,Button,Panel} from 'react-bootstrap';
import '../css/login.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://127.0.0.1:8000,http://localhost:8000';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

export default class Login extends React.Component {
	constructor(props, context) {
	    super(props, context);
	    this.state = {
	        open: false
	    };
	}

	handleClick(e) {
        axios.post('/login', {
            email: this.emailValue.value,
            password: this.passValue.value
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
	}

	renderLoginButton(){
	    return (
	        <button
                type="submit"
                className="btn btn-primary btn-block btn-registro"
                onClick={() => this.handleClick()} >INICIAR SESIÓN
            </button>
        );
    }

	render(){
	    return(
	        <div>
                <Button onClick={() => this.setState({ open: !this.state.open })}>
                    Login
                </Button>
                <Panel id="collapsible-panel-example-1"  expanded={this.state.open} style={{position:"absolute"}}>
                    <Panel.Collapse>
                        <Panel.Body>
                            <Row className="login-form" style={{color:"#37aa31"}}>
                                <Col>
                                    <h2 className="text-center">Sendengo</h2>
                                    <hr/>
                                    INICIAR SESIÓN
                                    <div className="espacio">
                                    </div>

                                    <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                                            <input ref={el => this.emailValue=el} type="email" className="form-control" id="exampleInputEmail2" placeholder="micorreo@dominio.com" required />
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                                            <input ref={el => this.passValue=el} type="password" className="form-control" id="exampleInputPassword2" placeholder="Contraseña" required/>
                                            <div className="help-block text-right"><a href="" style={{color:'#37aa31'}}>Olvidaste tu contraseña ?</a></div>
                                        </div>
                                        <div className="form-group">
                                            {this.renderLoginButton()}
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
