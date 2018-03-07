
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../css/testimoniales.css';
var FaQuoteLeft = require('react-icons/lib/fa/quote-right');



export default class Testimonios extends React.Component{
	render(){
		return(

			<Grid>
 				 <Row className="show-grid">
    				<Col xs={12} md={12}>
      					<h2 className="text-center">Testimoniales</h2>
    				</Col>
    				
 				</Row>

  				<Row className="show-grid">
   					<Col xs={12} md={4}>
      					<blockquote>
    						<img className="img-circle center-block" src="http://via.placeholder.com/150x150" style={{width:"100px",height:"100px"}}/>
                
    						<p><FaQuoteLeft/>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                         	</p>
                         	<footer className="blockquote-footer">Source Title</footer>
    					</blockquote>
    				</Col>
    				<Col xs={12} md={4}>
      					<blockquote>
    						<img className="img-circle center-block" src="http://via.placeholder.com/150x150" style={{width:"100px",height:"100px"}}/>
    						<p><FaQuoteLeft/>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                         	</p>
                         	<footer className="blockquote-footer">Source Title</footer>
    					</blockquote>
    				</Col>
    				<Col xs={12} md={4}>
      					<blockquote>
    						<img className="img-circle center-block" src="http://via.placeholder.com/150x150" style={{width:"100px",height:"100px"}}/>
    						<p><FaQuoteLeft/>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                         	</p>
                         	<footer className="blockquote-footer">Source Title</footer>
    					</blockquote>
    				</Col>
  				</Row>

  				
			</Grid>


	

		)
	}
}




