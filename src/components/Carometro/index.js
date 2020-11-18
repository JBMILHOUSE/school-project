import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import './style.css';

const apiUrl = 'http://localhost:5000/api/aluno';
var dadosAlunos = [];

const imgUrl = 'https://github.com/JBMILHOUSE/images/blob/main/';

export default class Carometro extends Component {

  componentDidMount() {
    fetch(apiUrl)
       .then(res => res.json())
       .then((result) => {
         dadosAlunos = result;
         console.log("dadosAlunos:" + result);
       })
  }
  
  render() {
    return(
      <div>
      <h1>Carômetro</h1>
      {
        dadosAlunos.map(
          (aluno) => 
            <div className="card" key={aluno.id}>
                <Flippy
                  flipOnHover={true}
                  flipOnClick={false} 
                  flipDirection="vertical"
                  style={{ flex: 0, backgroundColor: '#E0E0E0', }}>
                 <FrontSide style={{ backgroundColor: '#F5F5F5'}}>
                  <img src={`${imgUrl}/${aluno.ra}.png?raw=true`}  alt={aluno.ra} />
                 </FrontSide>
                 <BackSide>
                  <div className="container">
                   <h4 className='cardAluno'><b>{aluno.ra}</b></h4>
                   <p className='cardAluno'>{aluno.nome}</p>
                   <p className='cardAluno'> Curso: {aluno.codCurso}</p>
                  </div>
                 </BackSide>
                </Flippy> 
              </div>
          )
      }
     </div>
    )
  }
}

