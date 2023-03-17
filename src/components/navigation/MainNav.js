import React from "react";
import NavLinks from "./NavLinks";
import MHeader from "./MHeader";
import { Link } from "react-router-dom";

import "./MainNav.css"
function MainNav() {

    return (
        <React.Fragment>
            <nav className="nav__drawer-nav">
                <NavLinks />
            </nav>
          
                
          
          <MHeader>
            <button className="nav__menu-btn" >
              <span />
              <span />
              <span />
            </button>
            <h1 className="nav__title">
              <Link to="/">Accueil</Link>
            </h1>
            <nav className="main-navigation__header-nav">
              <NavLinks />
            </nav>
          </MHeader>
        </React.Fragment>
      );
    }


export default MainNav;