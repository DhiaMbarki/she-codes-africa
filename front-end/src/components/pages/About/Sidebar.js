import React, { Component } from "react";
import "./Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";
import { FiExternalLink } from "react-icons/fi";
import logo from "./images/My-logo4.ico";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <img src={logo} />
        <h1>
          <Link smooth to="/#start" className="h1_links">
            She Code Africa
          </Link>
        </h1>
        <p style={{ color: "black", fontWeight: "bold" }} className="gmail">
          {" "}
          tahridhia22@gmail.com{" "}

        </p>
        <ul className="sidebar-nav">
          <li className="sidebar-nav-items">
            <Link smooth to="/#about" className="links">
              About
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#education" className="links">
              Education
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#interest" className="links">
              Interest
            </Link>
          </li>
          {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
        </ul>

        <div className="flip-card-back">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-icons">
              <a
                href="https://www.linkedin.com/in/sachin-mittal-476174158?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoRhF2EUsQJ%2BygJpLEZb%2FFA%3D%3D"
                rel="opener noreferrer"
                target="_blank"
                class="fab fa-linkedin"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://github.com/DhiaMbarki"
                rel="opener noreferrer"
                target="_blank"
                class="fab fa-github-square"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://twitter.com"
                rel="opener noreferrer"
                target="_blank"
                class="fab fa-twitter"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://www.instagram.com/"
                rel="opener noreferrer"
                target="_blank"
                class="fab fa-instagram-square"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="mailto:tahridhia22@gmail.com"
                rel="opener noreferrer"
                target="_blank"
                class="fa fas fa-envelope fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://www.facebook.com"
                rel="opener noreferrer"
                target="_blank"
                class="fab fa-facebook-f"
              ></a>
            </li>
            
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
