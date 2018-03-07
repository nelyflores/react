import React from 'react';
import Contacto from '../componentes/contacto'
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Contactanos extends React.Component{
	render(){
		return(

			<ScrollableAnchor  className="contactanos" id="contactanos">
				<div className="container">
				<Contacto/>


				</div>
			</ScrollableAnchor>



			)
	}
}
