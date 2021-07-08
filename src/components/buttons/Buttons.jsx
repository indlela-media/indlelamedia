import React from 'react';
import { NavLink } from 'react-router-dom';

//SCSS
import '../../scss/buttons.scss';


export function YellowGreenBtn({text, href}) {
    return (
        <NavLink className="yellowGreen" to={href}>{text}</NavLink>
    )
}

export function GreenBlueBtn({text, href}) {
    return (
        <NavLink className="greenBlueBtn" to={href}>{text}</NavLink>
    )
}

export function CallToActionBtn({text, href}) {
    return (
        <NavLink className="callToActionBtn" to={href}>{text}</NavLink>
    )
}
