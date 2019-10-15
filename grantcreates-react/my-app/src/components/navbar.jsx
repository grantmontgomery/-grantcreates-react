import React, { Component } from 'react';
import "./navbar.css"

class NavBar extends Component {
    state = {  }

  
    render() { 
        return (
        <React.Fragment>
            <nav className="navbar">
                <a href="">
                    <img src="pictures/grantcreates_logo_animate.png" alt="part of the logo which moves"/>
                    <img src="" alt=""/>
                </a>
                <ul className="navlist">
                    <li>
                        <a href="" >
                        About
                        </a>
                    </li>
                    <li className="lastnavitem">
                        <a href="" >
                        Contact
                        </a>
                    </li>
                </ul>
            </nav>




        </React.Fragment>

         );
    }
}
 
export default NavBar;