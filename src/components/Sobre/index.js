import React, { Component } from 'react';
import './style.css';

export default class Sobre extends Component { 
 render() {
   return(
     <div className="info">
      <h1>Sobre</h1>
      <p>
       Criado em 1967, o Colégio Técnico de Campinas da Unicamp – COTUCA, mantido pela
       Universidade Estadual de Campinas, é uma instituição de ensino pública e gratuita, 
       que atua na formação profissional de nível técnico e oferece ensino médio, na modalidade 
       integrada ao ensino técnico, para alguns de seus cursos. O Colégio oferece  dezessete 
       opções de cursos técnicos e quatro opções de especialização no nível técnico, sendo 
       que 60% das vagas são no período noturno.</p>
        
        <p>
        Os cursos oferecidos pelo COTUCA abrangem os seguintes eixos tecnológicos: ambiente e 
        saúde, informação e comunicação, controle e processos industriais, produção alimentícia,
        produção industrial e gestão e negócios. A qualidade de seus cursos é evidenciada pela 
        grande inserção dos formandos no mercado de trabalho e também nas melhores universidades
        do país.
        </p>

        <div className="info-foto">
          <img  src="https://cotuca.unicamp.br/cotuca/wp-content/uploads/2015/08/foto_predio_amarelo.jpg" alt="foto-escola"/>
        </div>
     </div>
   )
 }
}
