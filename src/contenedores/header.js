import React from 'react';
import '../css/cabecera.css';

import Navegacion from '../componentes/nav';
import Cabecera from '../componentes/cabecera';
import Modalpublicatucarga from '../componentes/modalpublicatucarga';
import Navegacionxs from '../componentes/navegacionxs';

export default class Header extends React.Component{
	constructor() {
     super();
     this.state = {
        className: 'hidden'
     }
   }
   handleScroll() {
    if (document.documentElement.scrollTop > 366) {

       this.setState({
         className: 'show'
       })
     } else if (document.documentElement.scrollTop < 366) {
   	this.setState({
   		className: 'hidden'

   	})
   }
   }

   componentDidMount() {
     window.onscroll = () => this.handleScroll()
   }



	render(){
		return(
			<section className="jumbotrones jumbotrones-fluid d-flex align-items-end">
				<Navegacion className={this.state.className}/>
        <Navegacionxs/>
				<Cabecera/>
				<Modalpublicatucarga/>
			</section>
		)
	}
}
