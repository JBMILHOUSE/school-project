import React, { Component } from 'react';

import './style.css';

const apiUrl = 'http://localhost:5000/api/aluno';
const stateInicial = {
    aluno: { ra: '', nome: '', codCurso: 0},
    dadosAlunos: []
}
export default class CadastroAluno extends Component {
  renderForm() {
    return (
        <div className="inclui-container">
            <label>RA:</label>
            <input 
               type="text"
               id= "ra"
               placeholder="RA do Aluno"
               className= "form-input"/>

            <label>Nome:</label>
            <input 
               type="text"
               id= "nome"
               placeholder="nome do aluno"
               className= "form-input"/> 

            <label>Código do curso:</label>
            <input 
               type="number"
               id= "codCurso"
               placeholder="0"
               className= "form-input"/>  

            <button className="btnSalvar">Salvar</button>
            <button className="btnCancelar">Cancelar</button> 
        </div>
    )
  }

  render() {
    return(
        <div>
            <h1 className="tituloCadastro">Cadastro de Alunos</h1>
            {this.renderForm()}
        </div>
    )
  }
    
}
