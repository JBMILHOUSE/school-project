import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CadastroAluno from './components/CadastroAluno';
import CadastroCurso from './components/CadastroCurso';
import Carometro from './components/Carometro';
import Sobre from './components/Sobre';

export default class Rotas extends Component {
  render() {
    return(
      <Switch>
         <Route exact path="/" component={CadastroAluno}/>
         <Route path="/cadastrocurso" component={CadastroCurso}/>
         <Route path="/carometro" component={Carometro}/>
         <Route path="/sobre" component={Sobre}/>
         <Redirect from='*' to='/'/>
      </Switch>
    )
  }
}