import React, { Component } from 'react'
import Navbar from '../Components/Navbar/Navbar'

export class Home extends Component {
    render() {
        console.log('halaman Home di pangil');
        return (
            <div>
                <Navbar/>
                <h1>page Home</h1>
            </div>
        )
    }
}

export default Home
