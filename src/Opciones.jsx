import React from 'react'
import { Component } from 'react'

class Opciones extends Component {
    constructor(props) {
        super(props)
        this.state = {
    
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick(e) {
        this.props.onClick(e.target.id)
        console.log(e.target.id);
    }

    render() {
       
        return (
            <div className='opciones'>
                <div className="opcion">
                    <button id="a" className='botones' onClick={this.props.onClick}>
                        A
                    </button>
                    <h2>{this.props.opcionA}</h2>
                </div>
                <div className="opcion">
                    <button id="b" className='botones' onClick={this.props.onClick }>
                        B
                    </button>
                    <h2>{this.props.opcionB}</h2>
                </div>

            </div>
        )
    }
}

export { Opciones }