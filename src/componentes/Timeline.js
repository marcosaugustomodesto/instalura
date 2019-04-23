import React, { Component } from 'react';
import FotoItem from './FotoItem';

export default class Timeline extends Component {

  constructor(){
    super();
    this.state = {fotos:[]}
  }

   componentDidMount(){
     fetch(`http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`)
     .then(response => response.json())
     .then(fotos => {
       this.setState({fotos:fotos})
     });
   }
   render(){
       const _fotos = this.state.fotos;
       let fotosMapeadas;
       if(_fotos.length > 0) {
          fotosMapeadas = _fotos.map(foto => <FotoItem key={foto} foto={foto}/>)
       } 

        return (          
            <div className="fotos container">
                  {fotosMapeadas}          
            </div>            
        );
    }
}