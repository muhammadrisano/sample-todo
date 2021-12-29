import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
