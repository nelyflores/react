import React from 'react';
import {Panel,Button} from 'react-bootstrap';
import Labels from './label';

export default class Checkboxflota extends React.Component{
	render(){
		return(
			<div>
			<input type="checkbox" id={this.props.idflota}/>
			<Labels name={this.props.name}/>
                    
			</div>
			)
	}
}
