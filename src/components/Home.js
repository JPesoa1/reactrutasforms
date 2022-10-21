import React, { Component } from 'react'
import logohome from './../assets/images/home.png'

export default class Home extends Component {
  render() {
    return (
      <div> <h1>Componente Home</h1>
      <img src={logohome} alt="" style={{width:"250px",height:"250px"}}/></div>
    )
  }
}
