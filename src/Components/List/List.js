import React, { Component } from "react";
import {withRouter} from 'react-router-dom'

export class List extends Component {

    handleNavigate = ()=>{
        this.props.history.push('/')
    }
  render() {
    return (
      <>
        <h3>List Menu: </h3>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        <button onClick={this.handleNavigate}>pindah</button>
      </>

    );
  }
}

export default withRouter(List);
