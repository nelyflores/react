//Dependencias
import React from 'react';
import ReactDOM from 'react-dom';
//Rutas
import './index.css';
import App from './App';
import Sidebar from './sidebar'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Sidebar />, document.getElementById('root'));
registerServiceWorker();
