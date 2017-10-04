import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavbarComponent extends Component {
    render() {
        return (
            <div className="navbar-wrapper row">
                <div className="col-md-12">
                    <h1>Vital Grasp</h1>
                    <ul className="menu">
                        <li className="listItem"><Link style={{color: "rgba(255, 193, 7, 0.75)"}} to="/">Home</Link></li>
                        <li><Link style={{color: "rgba(255, 193, 7, 0.75)"}} to="/about">About</Link></li>
                        <li><Link style={{color: "rgba(255, 193, 7, 0.75)"}} to="/resources">Resources</Link></li>
                        <li><Link style={{color: "rgba(255, 193, 7, 0.75)"}} to="/contacts">Contacts</Link></li>
                        <li><Link style={{color: "rgba(255, 193, 7, 0.75)"}} to="/management">Admin</Link></li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default NavbarComponent;
