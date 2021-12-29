import React, { Component } from 'react'
import style from './input.module.css'

class Input extends Component {
    render() {
        return (
           <input
           className={style['form-control']}
           type={this.props.type}
           name={this.props.name}
           id={this.props.id}
           value={this.props.value}
           placeholder={this.props.placeholder}
           onChange={this.props.onChange}
           />
        )
    }
}

export default Input
