import React, { Component } from 'react'
import logocine from '../assets/images/cine.jpg'

export default class Cine extends Component {
  render() {
    return (
      <div>
         <h1>Componente Cine</h1>
        <img src={logocine} alt="" style={{width:"150px",height:"150px"}}/>
      </div>
    )
  }
}
