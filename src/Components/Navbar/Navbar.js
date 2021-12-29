import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                {this.props.isSearch ? <input type="text" placeholder='search' /> : null}
                
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
            </ul>
            </div>
        )
    }
}

export default Navbar
