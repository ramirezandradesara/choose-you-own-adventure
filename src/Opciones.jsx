import React from 'react'
import { Component } from 'react'

class Opciones extends Component {
    render() {
        return (
            <div className='opciones'>
                <div id="a" className="opcion">
                    <button className='botones'>
                        A
                    </button>
                    <h2>{this.props.opcionA}</h2>
                </div>
                <div id="b" className="opcion">
                    <button className='botones'>
                        B
                    </button>
                    <h2>{this.props.opcionB }</h2>
                </div>

            </div>
        )
    }
}

export { Opciones }