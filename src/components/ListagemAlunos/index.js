import React, { Component } from 'react';
import './style.css';
import LinhaAluno from '../LinhaAluno';

export default class ListagemAlunos extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
           <div className="listagem">
               <h1 className="tituloListagem">Listagem de Alunos</h1>
               <table className="listaAlunos" id="tblListaAlunos">
                    <thead>
                      <tr className="cabecTabela">
                       <th className="tabTituloRa">RA</th>
                       <th className="tabTituloNome">Nome</th>
                       <th className="tabTituloCurso">Curso</th>
                      </tr> 
                    </thead>

                     {this.props.alunos.map((aluno) => <LinhaAluno ra={aluno.ra} nome={aluno.nome} codCurso={aluno.codCurso}/> )}
                </table>
            </div>
        )
    }
}