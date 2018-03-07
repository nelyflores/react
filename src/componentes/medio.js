import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';


import '../css/medios.css';
var FaPlusCircle = require('react-icons/lib/fa/plus-circle');

export default class Medio extends React.Component{
	render(){
		return(

			<Grid>
				<Row>
					<Col xs={12} md={12}>
						<h2 className="text-center"> Sendengo en los medios</h2>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={4}>
						<div className="card">
                        	<img src="http://cevirdikce.com/proje/hasem-2/images/finance-1.jpg"/>
                        	<h4>Investment Strategy</h4>
                        	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        	<a href="blog-ici.html" className="green-button ">Read More</a>
                    	</div>
					</Col>
					<Col xs={12} md={4}>
						<div className="card">
                        	<img src="http://cevirdikce.com/proje/hasem-2/images/finance-1.jpg"/>
                        	<h4>Investment Strategy</h4>
                        	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        	<a href="blog-ici.html" className="green-button">Read More</a>
                    	</div>
					</Col>
					<Col xs={12} md={4}>
						<div className="video-container">
   							<div className="embed-responsive embed-responsive-16by9">
								<iframe className="youtube-video video-container" src="//www.youtube.com/embed/Tdb_vxoUD4w"></iframe>
							</div>

						</div>

					</Col>
				</Row>
			</Grid>
		)
	}
}
