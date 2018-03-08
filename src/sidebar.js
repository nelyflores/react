
import React from 'react';
import  './css/siderbar.css';

export default class Sidebar extends React.Component {
	render(){
		return(
			<nav className="navbar navbar-default" role="navigation">
				<div className="container">
					<div className="navbar-header">
						<a id="menu-toggle" href="#" className="navbar-toggle">
								<span className="sr-only">Toggle navigation</span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						</a>
			  			<a className="navbar-brand" href="home.xhtml">
			  				logo
			  			</a>
					</div>
					<div id="sidebar-wrapper" className="sidebar-toggle">
						<ul className="sidebar-nav">
					    	<li>
					      		<a href="#item1">Item 1</a>
					    	</li>
					    	<li>
					      		<a href="#item2">Item 2</a>
					    	</li>
					    	<li>
					      		<a href="#item3">Item 3</a>
					    	</li>
					  	</ul>
					</div>
			  	</div>
			</nav>


			)
	}
}
