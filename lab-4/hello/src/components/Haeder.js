import React from 'react'
import Navbar from './Navbar';
import '../App.css'

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <img src={require("./cover.jpg")}/>
        </div>
    )
}

export default Header