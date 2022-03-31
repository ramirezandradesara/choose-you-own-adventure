import React from 'react';
import { Component } from 'react';

class Recordatorio extends Component{
    render(){
        return(
            <div className="recordatorio">
                <h2>Selección anterior: {this.props.anteriorEleccion} </h2>
                <h2>Historial de opciones elegidas: {this.props.historial}</h2>
            </div>
        )
    }
}

export { Recordatorio };