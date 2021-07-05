import React from 'react';
import { NavLink } from 'react-router-dom';

//SCSS
import '../../scss/buttons.scss';


export function YellowGreenBtn({text, href}) {
    return (
        <NavLink className="yellowGreen" to={href}>{text}</NavLink>
    )
}
