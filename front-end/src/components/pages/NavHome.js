import React from "react";
import "./NavHome.css"


const NavHome = props => {
    return (
      <React.Fragment>
        <nav id="navbar">
          <div className="nav-wrapper">
            
            <a
              onClick={props.toggleMenu}
              className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
            >
              <span />
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  };
  

  export default NavHome
  