import React from 'react'
import "./NavLinks.css"
import { NavLink } from 'react-router-dom';

function NavLinks() {
    return (
        <ul className='link-navigateur'>
            <li>
                <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
                <NavLink to="/cours">Cours</NavLink>
            </li>
            <li>
                <NavLink to="/professeur">Professeurs</NavLink>
            </li>
        </ul>
        
    );
}

export  default NavLinks;