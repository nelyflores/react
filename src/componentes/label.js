import React from 'react';

export default class Labels extends React.Component{
	render(){
		return(
			<label className="label-pub-form" htmlFor={this.props.name}>
                    {this.props.name}
                    </label>

			)
	}
}