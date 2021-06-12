import React from 'react'

export default function NavigationBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top container animate__animated animate__fadeIn">

            <a href="/" className="navbar-brand">
                <img className="img-fluid" src="./img/logo.png" width="75px" alt="indlela media logo"/>
            </a>

            <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div id="my-nav" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item active ml-2">
                        <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item ml-2">
                        <a className="nav-link" href="/about">About</a>
                    </li>

                    <li className="nav-item ml-2">
                        <a className="nav-link" href="/pricing">Pricing</a>
                    </li>

                    <li className="nav-item ml-2">
                        <a className="nav-link" href="/services">Services</a>
                    </li>

                    <li className="nav-item ml-2">
                        <a className="nav-link btn btn-secondary" href="/logIn">Login</a>
                    </li> 

                </ul>
            </div>
        </nav>
    )
}
