import React from 'react';
import Contentabout from '../componentes/contentabout'; 
import '../css/about.css';

export default class About extends React.Component{
	render(){
		return(

			<section className="quienessomos">
				<div className="container">
					<Contentabout/>
				</div>
			</section>



			)
	}
}