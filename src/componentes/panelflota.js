import React from 'react';
import {Panel,Button} from 'react-bootstrap';
import Checkboxflota from './chexboxflota';
export default class Panelflota extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true,
      value:''
    };
  }

  render() {
    return (
      <div>
    

        <Panel id="collapsible-panel-example-3" >
          <Panel.Heading>
            <Panel.Title><div className="checkbox checkbox-success">
                    <Checkboxflota idflota={this.props.idflota} name={this.props.name} />
                    
                </div>
            </Panel.Title>
            <Panel.Toggle componentClass="a">Selecciona subtipo</Panel.Toggle>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
             <div className="checkbox checkbox-success">
                    <input type="checkbox" id="cajaseca"/>
                    <label className="label-pub-form" htmlFor="cajaseca">
                     CAJA SECA
                    </label>
                    <input type="checkbox" id="cajarefrigerada"/>
                    <label className="label-pub-form" htmlFor="cajarefrigerada">
                     CAJA REFRIGERADA
                    </label>
                </div>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}

