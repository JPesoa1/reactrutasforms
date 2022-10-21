import React, { Component } from 'react'
import logomusica from '../assets/images/musica.jpg'

export default class Musica extends Component {
  render() {
    return (
      <div>
        <h1>Componente Musica</h1>
        <img src={logomusica} alt="" style={{width:"150px",height:"150px"}}/>

        
      </div>
    )
  }
}
