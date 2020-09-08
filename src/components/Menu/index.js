import React, { Component } from 'react';
import Logo from '../../assets/imagens/logo_escola.png';
import './style.css';

export default class Menu extends Component {
    render() {
        return (
          <nav className="fundo">
            <a href= "/">
           <img className="Logo" src={Logo} alt="Logo escola"/> 
           </a> 

             <a className="itemMenu" href="/">
               Carômetro
             </a>

             <a className="itemMenu" href="/">
                Curso
             </a>

            <a className="itemMenu" href="/">
              Alunos    
            </a>
         </nav>
        )
    }

}
