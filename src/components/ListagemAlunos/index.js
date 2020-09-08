import React, { Component } from 'react';
import './style.css';
import LinhaAluno from '../LinhaAluno';

const Alunos = [ {'ra': 17289, 'nome': 'Chris', 'codCurso': 39 },
 { 'ra': 18289, 'nome': 'Mishelle', 'codCurso': 39 },
 { 'ra': 19351, 'nome': 'Carolina', 'codCurso': 39 },
 {'ra': 44444, 'nome': 'Alice', 'codCurso': 59 } ];

export default class ListagemAlunos extends Component {
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
                     {Alunos.map((aluno) => <LinhaAluno ra={aluno.ra} nome={aluno.nome} codCurso={aluno.codCurso}/> )}
                </table>
            </div>
        )
    }
}