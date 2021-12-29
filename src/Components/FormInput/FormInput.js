import React, { Component } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

export class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addFood(this.state.food)
    this.setState({
      food: ""
    });
  };
  render() {
    return (
        <>
      <form onSubmit={this.handleSubmit}>
        <Input
          name="food"
          type="text"
          id="food"
          placeholder="food"
          value={this.state.food}
          onChange={this.handleChange}
        />
        <Button type="submit" title="simpan" />
      </form>
      <hr />
      </>
    );
  }
}

export default FormInput;
