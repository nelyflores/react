import React, { Component } from 'react';
import Faqs from './contenedores/faqs';
import './App.css';
import  Header from'./contenedores/header';
import Testimoniales from './contenedores/testimoniales';
import Medios from './contenedores/Medios';
import About from './contenedores/about';
import Contactanos from './contenedores/contactanos';
import Footer from './contenedores/footer';
import Routes from './routes';



class App extends Component {

  render() {

    return (

      <div className="App">

         <Header/>
         <Faqs/>
         <Testimoniales/>
         <Medios/>
         <About/>
         <Routes/>
         <Contactanos/>
         <Footer/>



      </div>



    );
  }
}

export default App;
