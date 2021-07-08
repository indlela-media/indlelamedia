//
import React from 'react';

//React Components
import Navbar from './Navbar';
import NavLine from './NavLine';

//
export default function Header() {
    return (
        <header className="fixed-top">
            <NavLine />
            <Navbar />
        </header>
    )
}
