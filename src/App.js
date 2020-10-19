import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu/index.js';
//import ListagemAlunos from './components/ListagemAlunos/index.js';
//import FormAluno from './components/FormAluno/index.js';
import Footer from './components/Footer/index.js';
import Rotas from './routes.js';

class App extends Component {

  constructor(props) {
    super(props);
     this.novoAluno = [];
     this.state = {};
    }
  render(){
     return( 
       <BrowserRouter>
        <div>
          <Menu />
          <Rotas />
          <Footer/>
        </div>
      </BrowserRouter>
     )
  }
}

export default App;
