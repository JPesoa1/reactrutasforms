import React, { Component } from 'react'

export default class Collatz extends Component {
    state = {
        lista:[]
    }
    cajanumero = React.createRef();
    generarLista = (e)=>{
        
        e.preventDefault();

        var aux=parseInt(this.cajanumero.current.value);
        console.log(aux)
        
        do{
           
            if(aux%2===0){
                aux=aux/2
                
                console.log(aux);
                this.state.lista.push(aux);
                this.setState({
                    lista: this.state.lista
                })
            }else if(aux%2===1){
                
                aux=(aux*3)+1
                
                console.log(aux);
                this.state.lista.push(aux);
                this.setState({
                    lista: this.state.lista
                })
            }

        }while(aux!=1);
  
    }
   
  render() {
    return (
      <div>
        <form onSubmit={this.generarLista}>
                <label>Introduzca numero:</label>
                <input type="text" ref={this.cajanumero}/>
                <br/>
                <button>PULSAR</button>
                <ul>
                    {
                        this.state.lista.map((numero,index)=>{
                            return (<li key={index}>{numero}</li>)
                        })
                    }
                </ul>

        </form>
        
      </div>
    )
  }
}
