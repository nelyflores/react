import React from 'react';
import{Grid, Col, Row, } from 'react-bootstrap';
import ToggleDisplay from 'react-toggle-display';

export default class Contentabout extends React.Component{
	constructor() {
    super();
    this.state = { show: true };
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }
	render(){
		return(

			<Grid>

				<ToggleDisplay show={this.state.show}>
					<Row>
					<Col xs={12} md={6}>
						<h2 className='sub-about'>¿Qué es SENDENGO?</h2>

					</Col>
				</Row>
					<Row className={this.props.shouldHide ? 'hidden' : ''}>
						<Col xs={12} md={6} className={this.props.className}>
							<p className="text-justify content-about">Sendengo es una plataforma de asignación de carga que facilita herramientas tecnológicas a transportistas y clientes.</p>
							<p className="text-justify content-about">Somos el punto de encuentro para nuestra comunidad. Buscamos crear el futuro del autotransporte de carga en México brindando soluciones para cada sector de la industria.</p>
							<p className="text-justify content-about">Sendengo es el siguiente paso y nos enfocamos en llenar tus vacíos con servicios de profesionalización, capacitaciones, herramientas inteligentes y también te ayudamos a llenar regresos vacíos.</p>
						</Col>

					</Row>
				</ToggleDisplay>

				<ToggleDisplay if={!this.state.show} >
					<Row className={this.props.shouldHide ? 'hidden' : ''}>
						<Col xs={12} md={6} className={this.props.className}>
							<h2>PREGUNTAS FRECUENTES</h2>
							<h3>¿Sendengo es Gratis?</h3>
							<p>Usar nuestra plataforma es 100% gratis.</p>
							<h3>¿Cómo gana Sendengo?</h3>
							<p>Sendengo gana solo si TÚ ganas. Cobramos el 10% de comisión sobre servicio realizado.</p>
							<h3>¿Cómo me paga Sendengo?</h3>
							<p>El cliente hace el deposito por adelantado. Nosotros te garantizamos el pago inmediato una vez se realice el servicio y emitas tu factura.</p>
							<h3>¿Qué alcance tiene Sendengo?</h3>
							<p>Cubrimos todo transporte de carga terrestre. Manejamos cargas consolidadas, pero no paquetería. No cubrimos transporte maritimo ni aéreo.</p>

						</Col>

					</Row>

				</ToggleDisplay>

				<Row>
					<Col xs={12} md={6}>
						<button className="btn btn-default btn-about" onClick={ () => this.handleClick() }>Preguntas Frecuentes</button>
					</Col>
				</Row>
			</Grid>
		)
	}
}
