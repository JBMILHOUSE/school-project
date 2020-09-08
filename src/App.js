import React from 'react';
import Menu from './components/Menu/index.js';
import ListagemAlunos from './components/ListagemAlunos/index.js';

function App() {
  return (
    <div>
      <Menu />
      <h1> Projeto Escola </h1>
      <ListagemAlunos />
    </div>
  );
}

export default App;
