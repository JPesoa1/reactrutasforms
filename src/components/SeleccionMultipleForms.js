import React, { Component } from 'react'

export default class SeleccionMultipleForms extends Component {
    //VARIABLE PARA HACER REFERENCIA AL <select>
    selectMultiple = React.createRef();
    //METODO PARA GENERAR LOS OPTIONS DINAMICAMENTE
    generarOptions = () =>{
        var options = []
        for(var i=1;i<=10;i++){
            options.push(
            <option key={i} value={"Elemento "+i}>
                {"Elemento "+i}
            </option>)
        }
        return options;
    }

    //METODO PARA MOSTRAR LOS ELEMNTOS SELECCIONADOS
    //AL ENVIAR EL FORM
    mostrarSeleccionados = (e) =>{
        e.preventDefault();
        //TENEMOS ACCESO,DENTRO DE UN <select> A SUS OPTION
        //Y NOS DEVUELVE UN ARRAY
        var options=this.selectMultiple.current.options;
        var datos="";
        //RECORRE,OS TODO LOS ELEMENTOS DEL <select>
        for(var option of options){
            if(option.selected==true){
                datos+=option.value+ ",";
            }
        }

        this.setState({
            seleccionados:datos
        })
    }

    //UNA VARIABLE state PARA DIBUJAR LOS ELEMENTOS SELECCIONADOS
    state={
        seleccionados: ""
    }
  render() {
    return (
      <div>
        <h1>Seleccion Multiple Forms</h1>
        <form onSubmit={this.mostrarSeleccionados}>
            <label>Seleccione elementos: </label>
            <select ref={this.selectMultiple} size="10" multiple>
                {
                    this.generarOptions()
                }
            </select>

            <button>
                Mostrar seleccionados
            </button>
        </form>
        <h1 style={{color:"blue"}}>{this.state.seleccionados}</h1>
      </div>
    )
  }
}
