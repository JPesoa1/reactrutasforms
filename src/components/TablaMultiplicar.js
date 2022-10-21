import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state={
        lista:[],
        lista2:[],
        filas:[],
       
    }
    // cajanumero = React.createRef();
    cajaselect = React.createRef();

    mostrarTabla = (e) =>{
        e.preventDefault();
        var num= parseInt(this.cajaselect.current.value)
        var datos=[]
        for(var i=1;i<=10;i++){
            var resultado = num*i;
            var operacion = num+ " * "+ i;
            datos.push(<tr>
                <td>{resultado}</td>
                <td>{operacion}</td>
            </tr>);
        }
        this.setState({
            filas: datos
        })
    }
    generarOption= () =>{
        var options = [];
        
        for(var i=1;i<=5;i++){
            var random = parseInt(Math.random()*100);
            options.push(<option>{random}</option>);
        }
        return options
        

    }

    // generarLista = (e) =>{
       
    //     e.preventDefault();
    //     var num = parseInt(this.cajanumero.current.value);
    //     var aux=[];
        
        
    
    //     for(var i=1;i<=10;i++){
            
    //         aux.push(num*i)
            
    //     }
    //     this.setState({
    //         lista: aux
    //     })

       

        


    // }
   
    
  render(){
    
    return (
      <div>
    
        {/* <form onSubmit={this.generarLista}>
            <label>Introduzca el numero: </label>
            <input type="text"  ref={this.cajanumero}/>
            <button>PULSAR</button>
            <ul>
                {
                    this.state.lista.map((numero,index)=>{
                        return(<li key={index}>{numero}</li>)
                    })
                }
            </ul>

            <hr/>
           
        </form> */}
        
        
        <h1>Tabla multiplicar</h1>
        
        <form>
            <label>Seleccioon numero</label>
            <select onChange={this.mostrarTabla} ref={this.cajaselect}>
                {this.generarOption()}

            </select>

            <table border={"1"}>
                <thead>
                    <tr>
                        <th>Operacion</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.filas
                    }
                </tbody>
                
            </table>
        </form>
        
      </div>
    )
  }
}
