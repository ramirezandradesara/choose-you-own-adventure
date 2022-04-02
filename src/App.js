import React from 'react';
import { Historia } from './components/Historia';
import { Opciones } from './components/Opciones';
import { Recordatorio } from './components/Recordatorio';
import data from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      anteriorEleccion: "",
      historial: [],
      contadorElecciones: 0
    };
  }

  componentDidUpdate(){
    if(this.state.contadorElecciones === 5){
     if(window.confirm("¿Querés volver a jugar?")){
       this.setState({
         contador: 0,
         anteriorEleccion: "",
         historial: [],
         contadorElecciones: 0
       });
     }
    }
  }

  handleClick = (e) => {
    
   if (this.state.contadorElecciones === 4) {
      alert("Fin")
      this.setState({
        contadorElecciones: this.state.contadorElecciones + 1
      })
      
    } else  if (e.target.id === "a" && this.state.anteriorEleccion === "a") { 
      this.setState({
        contador: this.state.contador + 2,
        anteriorEleccion: "a",
        historial: [...this.state.historial, "a"],
        contadorElecciones: this.state.contadorElecciones + 1
      });

    } else if (e.target.id === "b" && this.state.anteriorEleccion !== "a") {
      this.setState({
        contador: this.state.contador + 2,
        anteriorEleccion: "b",
        historial: [...this.state.historial, "b"],
        contadorElecciones: this.state.contadorElecciones + 1
      });

    } else if (e.target.id === "b" && this.state.anteriorEleccion === "a") {
      this.setState({
        contador: this.state.contador + 3,
        anteriorEleccion: "b",
        historial: [...this.state.historial, "b"],
        contadorElecciones: this.state.contadorElecciones + 1
      });

    } else if (e.target.id === "a" && this.state.anteriorEleccion !== "a") { 
      this.setState({
        contador: this.state.contador + 1,
        anteriorEleccion: "a",
        historial: [...this.state.historial, "a"],
        contadorElecciones: this.state.contadorElecciones + 1
      });
    }
  }

  render() {
    console.log(this.state.contadorElecciones);
    return (
      <div className='layout'>
        <Historia
          historia={data[this.state.contador].historia}
        />
        <Opciones
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
          onClick={this.handleClick}
        />
        <Recordatorio
          anteriorEleccion={this.state.anteriorEleccion}
          historial={this.state.historial.map((eleccion, index) =>
            <li key={index}>
              {eleccion}
            </li>)}
        />
      </div>

    );
  }
}

export { App };