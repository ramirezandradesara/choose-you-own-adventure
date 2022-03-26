import React from 'react';
import { Historia } from './Historia';
import { Opciones } from './Opciones';
import { Recordatorio } from './Recordatorio';
import data from './data.json';


class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      contador: 1,
      anteriorEleccion: "",
      historial: ["A", "B", "A", "A"],
     
    };
  }

handleClick = (e) => {
  const eleccion = e.target.value;
  const historial = this.state.historial;
  historial.push(eleccion);
  this.setState({
    contador: this.state.contador + 1,
    anteriorEleccion: eleccion,
    historial: historial,
  });
}


  render() {
    return (
      <div className='layout'>
        <Historia 
        historia={data[this.state.contador].historia}
        />
        <Opciones 
        opcionA={data[0].opciones.a}
        opcionB={data[0].opciones.b}
        />
        <Recordatorio 
        anteriorEleccion={this.state.anteriorEleccion}
        historial={this.state.historial.map(eleccion => <li>{eleccion}</li>)}
        
        />
      </div>

    );
  }
}

export { App }