//REACT Modules
import React from 'react';
import { NavLink } from 'react-router-dom';

//SCSS
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

//REACT Components
import { YellowGreenBtn } from '../buttons/Buttons';

//
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navBar">
            <div className="container">
                <a className="navbar-brand" href="/">Indlela Media</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/partners">Partners</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        
                        <li className="nav-item d-flex">
                            <YellowGreenBtn text="Consultation" href="/consultation"/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
