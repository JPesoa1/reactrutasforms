import React, { Component } from 'react'


export default class FormSimple extends Component {
    //NECESITAMOS UNA VARIABLE DE REFERENCIA PARA CADA
    //CONTROL DE FORMULARIO QUE DESEEMOS RECUPERAR SU VALOR
    cajanombre = React.createRef();
    cajaedad = React.createRef();
    //EL SIGUIENTE PASO SERA TENER UN METODO PARA CAPTURAR
    //EL SUBMIT DEL FORMULARIO
    //EL METODO DEBE RECIBIR UN EVENT (e)
    recibirDatosForm = (e) =>{
        console.log("Aqui")
        //LA PRIMERA INSTRUCCION SIEMPRE SERA
        //DETENER LA PROPAGACION DEL EVENTO
        e.preventDefault();
        //EN LAS REFERENCIAS DE OBJETO, PARA CAPTURAR EL VALUE
        //SE UTILIZA referencia.current.value
        console.log(this.cajanombre.current.value);
        this.setState({
            user:{
                nombre: this.cajanombre.current.value,
                edad: this.cajaedad.current.value
            }
        });
    }

    state ={
        user:null
    }
  render() {
    return (
      <div>
        <h1>Ejemplo simple forms</h1>
        {
            this.state.user &&
            (<div>
                <h2 style={{color:"blue"}}>
                    Usuario: {this.state.user.nombre}
                   
                </h2>
                <h2 style={{color:"red"}}>
                    Edad: {this.state.user.edad}
                </h2>
            </div>)
        }
        <form onSubmit={this.recibirDatosForm}>
            <label>Nombre: </label>
            <input type="text" ref={this.cajanombre}/>
            <br/>
            <label>Edad: </label>
            <input type="text" ref={this.cajaedad}/>
            <button>
                Enviar datos
            </button>
        </form>
       
      </div>
    )
  }
}
