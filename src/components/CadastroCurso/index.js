import React, { Component } from 'react';

import './style.css';

const apiUrl = 'http://localhost:5000/api/curso';
const stateInicial = {
  curso: { codCurso: 0 , nomeCurso: '' , periodo: '' },
  dadosCursos: []
}
export default class CadastroCurso extends Component {
 
  state = { ...stateInicial };
  
  componentDidMount() {

    fetch(apiUrl)
      .then(res => res.json())
      .then((result) => {
        this.setState({ dadosCursos: result });
        console.log("Função didMount: " + result);
      },
      (error) => {
        this.setState({ error });
      })
  }
  limpar() {
    this.setState({ curso: stateInicial.curso });
  }

  salvar() {
    const curso = this.state.curso;
    curso.codCurso = Number(curso.codCurso);
    const metodo = curso.id ? 'put' : 'post';
    const url = curso.id ? `${apiUrl}/${curso.id}` : apiUrl;

    fetch(url, {
      method: metodo,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(curso)
    })
      .then(
        resp => {
          resp.json().then((data) => {
            const listaCursos = this.getListaAtualizada(data);
            this.setState({ curso: stateInicial.curso, dadosCursos: listaCursos });
          })
        }
      )
  }

  getListaAtualizada(curso, add=true) {
    const lista = this.state.dadosCursos.filter(c => c.id !== curso.id);
    if (add) lista.unshift(curso);
    return lista;
  }

  atualizarCampo(event) {
    const curso = { ...this.state.curso };
    curso[event.target.codCurso] = event.target.value;
    this.setState({ curso });
  }
 
  renderForm(){
    return(
      <div className="inclui-container">
          <label>Código do Curso:</label>
          <input
            type="number"
            id="codCurso"
            placeholder="0"
            className="form-input"
            name="codCurso"
            value={this.state.curso.codCurso}
            onChange={e => this.atualizarCampo(e)}
          />

          <label>Nome:</label>
           <input
            type="text"
            id="nomeCurso"
            placeholder="nome do curso"
            className="form-input"
            name="nomeCurso"
            value={this.state.curso.nomeCurso}
            onChange={e => this.atualizarCampo(e)}
          />

          <label>Periodo:</label>
          <input
            type="text"
            id="periodo"
            placeholder="periodo"
            className="form-input"
            name="periodo"
            value={this.state.curso.periodo}
            onChange={e => this.atualizarCampo(e)}
          />

          <button className="btnSalvar" onClick={e => this.salvar(e)}>Salvar</button>
          <button className="btnCancelar" onClick={e => this.salvar(e)}>Cancelar</button>  
      </div>
    )
  }
  
  renderTable() {
    return(
      <div className="listagem">
        <table className="listaCursos" id="tblListaCursos">
          <thead>
            <tr className="cabecTabela">
               <th className="tabTituloCurso">Código do curso</th>
               <th className="tabTituloNome">Nome curso</th>
               <th className="tabTituloPeriodo">Periódo</th>
               <th className="tabTituloCurso"></th>
               <th className="tabTituloCurso"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.dadosCursos.map(
              (curso) => 
               <tr key={curso.id}>
                 <td>{curso.codCurso}</td>
                 <td>{curso.nomeCurso}</td>
                 <td>{curso.periodo}</td>
                 <td>
                   <button onClick={() => this.carregar(curso)}>Alterar</button>
                 </td>
                 <td>
                   <button onClick={() => this.remover(curso)}>Remove</button>
                 </td>
               </tr> )}
          </tbody>
        </table>
      </div>
    )
  }

  carregar(curso) {
    this.setState({ curso })
  }

  remover(curso) {
    const url = apiUrl+"/"+curso.id;

    if(window.confirm("Confirmar remoção do aluno: " + curso.codCurso)){
      console.log("entrou no confim");
      fetch(url, { method: 'delete' })
           .then(resp => {
             const lista = this.getListaAtualizada(curso, false)
             this.setState({ dadosCursos: lista });
           })
    }
  }
  render(){
    return(
      <div>
        <h1 className="tituloCadastro">Cadastro de Cursos</h1>
        {this.renderForm()}
        {this.renderTable()}
      </div>
    )
  }
}