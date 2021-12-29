import React, { Component } from 'react'
import FormInput from '..//Components/FormInput/FormInput'
import List from '../Components/List/List'
import Navbar from '../Components/Navbar/Navbar'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      foods: [],
    }
  }

  handleAddFood = (item)=>{
    this.setState({
      foods: [...this.state.foods, item]
    })
  }

  handleNavigateToHome = function(){
    //   this.name = "risano"
    //   console.log(this);
    this.props.history.goBack()
  }
  
  render() {
      console.log('halaman Product dipanggil');
    return (
      <div>
          <Navbar isSearch/>
        <p>{this.state.email}</p>
        <p>{this.state.password}</p>
      <FormInput addFood={this.handleAddFood}/>
    <hr/>
    <List items={this.state.foods}/>
      
      <button onClick={this.handleNavigateToHome}>Kembali</button>
      </div>
    )
  }
}

export default App
