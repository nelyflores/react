import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../css/footer.css';
import  Playstore from '../img/google-play-badge.svg';
var FaFacebookSquare =require('react-icons/lib/fa/facebook-square');
var FaTwitterSquare = require('react-icons/lib/fa/twitter-square');
var FaInstagram = require('react-icons/lib/fa/instagram');
var FaLinkedinSquare =  require('react-icons/lib/fa/linkedin-square');

export default class Redessociales extends React.Component{
	render(){
		return(

			<Grid>
				<Row>
					<Col xs= {12} md={4}>
					<p><a><img className="logo-playstore" src={Playstore}/></a></p>

					</Col>
					<Col xs= {12} md={4}>
						<p><a>BLOG</a></p>

					</Col>
					<Col xs= {12} md={4}>
						
						<ul className="list-inline">
							<li><a className="ico-redes-sociales"><FaFacebookSquare/></a></li>
							<li><a className="ico-redes-sociales"><FaTwitterSquare/></a></li>
							<li><a className="ico-redes-sociales"><FaLinkedinSquare/></a></li>
							<li><a className="ico-redes-sociales"><FaInstagram/></a></li>
						</ul>

					</Col>
				</Row>
			</Grid>

		)
	}
}