import React from 'react'
import PropTypes from 'prop-types'
import {  Link } from 'react-router-dom';



const Navbar = ({ icon, title }) =>  {

        return (
            <nav className = "navbar bg-primary">
                <h1> <i className = {icon} /> {title} </h1>
                
                <ul>

                <l1> <Link to="/" >Home</Link> </l1>
                <l1> <Link to="/about" >About</Link> </l1>

                </ul>
                
            </nav>
        );
    
}

Navbar.defaultProps = {
    icon: "fab fa-github",
    title: "Github Finder"
}

Navbar.proptTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
};

export default Navbar
