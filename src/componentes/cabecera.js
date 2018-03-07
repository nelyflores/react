import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import '../css/cabecera.css';

export default class Cabecera extends React.Component{
	render(){
		return(
      <div>
  			<div >
            <div className="container">
              <h1 className="display-2 text-right">La mejor herramienta para transporte de carga!</h1>
            </div>

            <div className="container">
              <Grid>
                <Row>
                  <h2 className= "text-right">¡Comunícate Hoy!<br/>(55) 5510- 1128<br/>(55) 5510- 0687</h2>
                </Row>
              </Grid>
            </div>
    				
    				
  			</div>
      </div>
		)
	}
}


