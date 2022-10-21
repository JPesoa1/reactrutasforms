import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ol style={{display: "inline"}}>
            <li>
                <a href='/'>Home</a>

            </li>
            <li>
                <a href='/musica'>Musica</a>
            </li>

            <li>
                <a href='/cine'>Cine</a>
            </li>
        </ol>
      </div>
    )
  }
}
