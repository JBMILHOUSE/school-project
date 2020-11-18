import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/imagens/logo_escola.png';
import './style.css';

export default class Menu extends Component {
    render() {
        return (
          <nav className="fundo">
             
             <Link to= "/">
              <img className="Logo" src={Logo} alt="Logo escola"/> 
             </Link> 

             <Link className="itemMenu" to="/carometro">
               Carômetro
             </Link>

             <Link className="itemMenu" to="/cadastrocurso">
                Curso
             </Link>

             <Link className="itemMenu" to="/">
              Alunos    
             </Link>
             <Link className="itemMenu" to="/sobre">
               Sobre
             </Link>
         </nav>
        )
    }

}
