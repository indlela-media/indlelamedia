//
import React from 'react'

//
export default function NavLine() {
    return (
        <div className="navLine d-flex justify-content-center align-items-center">
            <div className="">
                <ul className="d-flex align-content-center p-0 m-0">
                    <li><a href="/"> Cape Town, South Africa</a></li>

                    <li className="mx-5"><a href="/" className="uderlined">info@indlelamedia.com</a></li>

                    <li>
                        <a href="/"> L</a>
                        <a href="/" className="mx-3"> F</a>
                        <a href="/"> I</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
