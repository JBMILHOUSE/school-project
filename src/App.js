import React, { Component } from 'react';
import Menu from './components/Menu/index.js';
import ListagemAlunos from './components/ListagemAlunos/index.js';
import FormAluno from './components/FormAluno/index.js';
import Footer from './components/Footer/index.js';

class App extends Component {

  constructor(props) {
    super(props);
    /*this.alunos = [
       { 'ra': 20189, 'nome': 'André', 'codCurso': 19},
       { 'ra': 20351, 'nome': 'Amanda', 'codCurso': 28 }, 
       { 'ra': 20302, 'nome': 'Pedro', 'codCurso': 59 },
     ];*/
 
      this.novoAluno = [];
      this.state = {};
    }

  criarAluno(ra, nome, codCurso){
    const novoAluno = { ra, nome, codCurso };
    this.alunos.push(novoAluno);
    this.setState({ 
      alunos: this.alunos 
    });
  }

  render(){
     return( 
        <div>
          <Menu />
          <div className="flex-container">
           <ListagemAlunos alunos={this.alunos} />
           <FormAluno criarAluno={this.criarAluno.bind(this)} />
         </div>
         
         <Footer/>
      </div>
     )
  }
}

export default App;
