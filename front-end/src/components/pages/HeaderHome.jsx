import React from "react";

import "./HeaderHome.css"

const HeaderHome = props => {

    return (
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="container">
          <h1>
            <span className="line">Devolop</span>
            <span className="line">your life</span>
            <span className="line">
              <span className="color">&</span> Be A women.
            </span>
          </h1>
          <div className="buttons">
            <a href="#contact" className="cta">
              get in touch
            </a>
          </div>
        </div>
      </header>
    );
  };


  export default HeaderHome