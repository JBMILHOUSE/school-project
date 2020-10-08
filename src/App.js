import React, { Component } from 'react';
import Menu from './components/Menu/index.js';
//import ListagemAlunos from './components/ListagemAlunos/index.js';
//import FormAluno from './components/FormAluno/index.js';
import Footer from './components/Footer/index.js';
import CadastroAluno from './components/CadastroAluno';

class App extends Component {

  constructor(props) {
    super(props);
      this.novoAluno = [];
      this.state = {};
    }
  render(){
     return( 
        <div>
          <Menu />
         <CadastroAluno/>
         <Footer/>
      </div>
     )
  }
}

export default App;
