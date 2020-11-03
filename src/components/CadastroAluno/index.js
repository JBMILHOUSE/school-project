import React, { Component } from 'react';

import './style.css';

const apiUrl = 'http://localhost:5000/api/aluno';
const apiCurso = 'http://localhost:5000/api/curso';
const stateInicial = {
    aluno: { ra: '', nome: '', codCurso: 0 },
    curso: { codCurso: 0, nomeCurso: '', periodo: ''},
    dadosAlunos: [],
    dadosCursos: []
}

export default class CadastroAluno extends Component {

  state = { ...stateInicial };

  componentDidMount() {
    fetch(apiUrl)
        .then(res => res.json())
        .then((result) => { this.setState({ dadosAlunos: result });
          console.log("Função didMount: " + result);
        },
         (error) => { 
           this.setState({ error }); 
          }
        )
    fetch(apiCurso)
      .then(res => res.json())
      .then((result) => { this.setState({ dadosCursos: result });
        console.log("Funcção didMount curso: " + result);
      },
      (error) => {
         this.setState({ error });
       }
      )
  }

  limpar() {
    this.setState({ aluno: stateInicial.aluno });
  }

  salvar() {
    const aluno = this.state.aluno;
    aluno.codCurso = Number(aluno.codCurso);
    const metodo = aluno.id ? 'put' : 'post';
    const url = aluno.id ? `${apiUrl}/${aluno.id}` : apiUrl;

    fetch(url, {
      method: metodo,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(aluno)
    })
     .then(
       resp => {
          resp.json().then((data) => { 
              const listaAlunos = this.getListaAtualizada(data);
                this.setState({ aluno: stateInicial.aluno, dadosAlunos: listaAlunos });
            })
        })
  }

  getListaAtualizada(aluno, add=true) {
    const lista = this.state.dadosAlunos.filter(a => a.id !== aluno.id);
    if (add) lista.unshift(aluno);
    return lista;
  }

  atualizaCampo(event) {
    const aluno = { ...this.state.aluno };
    aluno[event.target.name] = event.target.value;
    this.setState({ aluno });
  }


  renderForm() {
    return (
        <div className="inclui-container">
            <label>RA:</label>
            <input 
               type="text"
               id= "ra"
               placeholder="RA do Aluno"
               className= "form-input"
               name="ra"
               value={this.state.aluno.ra}
               onChange={ e => this.atualizaCampo(e)}
            />

            <label>Nome:</label>
            <input 
               type="text"
               id= "nome"
               placeholder="nome do aluno"
               className= "form-input"
               name="nome"
               value={this.state.aluno.nome}
               onChange={ e => this.atualizaCampo(e)}
            /> 

            <label>Curso:</label>
            <select>
              {this.state.dadosCursos.map(
                (curso) =>
                 <option key={curso.id} value={curso.codCurso}>
                  {curso.nomeCurso}
                 </option>
                )
              }
            </select>
            
            {/*<input 
               type="number"
               id= "codCurso"
               placeholder="0"
               className= "form-input"
               name="codCurso"
               value={this.state.aluno.codCurso}
               onChange={ e => this.atualizaCampo(e)}
            /> */} 

            <button className="btnSalvar" onClick={e => this.salvar(e)} >Salvar</button>
            <button className="btnCancelar" onClick={e => this.limpar(e)} >Cancelar</button> 
        </div>
    )
  }

  renderTable() {
    return(
      <div className="listagem">
        <table className="listaAlunos" id="tblListaAlunos">
          <thead>
             <tr className="cabecTabela">
               <th className="tabTituloRa">Ra</th>
               <th className="tabTituloNome">Nome</th>
               <th className="tabTituloCurso">Curso</th>
               <th className="tabTituloCurso"></th>
               <th className="tabTituloCurso"></th>
             </tr>
          </thead>
          <tbody>
            {this.state.dadosAlunos.map(
              (aluno) => 
                <tr key={aluno.id}>
                   <td>{aluno.ra}</td>
                   <td>{aluno.nome}</td>
                   <td>{aluno.codCurso}</td>
                   <td>
                     <button onClick={() => this.carregar(aluno)}>
                       Altera
                      </button>
                   </td>
                   <td>
                     <button onClick={() => this.remover(aluno)}>
                       Remove
                      </button>
                   </td>
                </tr> 
              )}
          </tbody>
        </table>
      </div>
    )
  }
  
  carregar(aluno) {
    this.setState({ aluno })
  }

  remover(aluno) {
    const url = apiUrl+"/"+aluno.id;

    if(window.confirm("Confirma remoção do aluno: " + aluno.ra)) {
      console.log("entrou no confirm");
      fetch(url, { method: 'delete' })
        .then(resp => {
          const lista = this.getListaAtualizada(aluno, false)
          this.setState({ dadosAlunos: lista });
        });
    }
  }


  render() {
    return(
        <div className="corpo">
            <h1 className="tituloCadastro">Cadastro de Alunos</h1>
            {this.renderForm()}
            
            {this.renderTable()}
        </div>
    )
  }
    
}
