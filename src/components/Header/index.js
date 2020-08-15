import React from 'react';
import './style.css'
import {FaBell,FaEnvelope} from 'react-icons/fa';
import Avatar from '../../assets/dummy-avatar.jpg'
export default function Header(props) {
  
    return(
      <header>
        <nav className="nav-bar">
     
          <div className="suport"></div>
          <ul className="nav-bar-list">
              <li className="nav-bar-link">
                <a href="/"><i><FaBell /><span>3+</span></i></a>
              </li>
              <li className="nav-bar-link">
                <a href="/"><i><FaEnvelope/><span>7</span></i></a>
              </li>
              <div className="nav-bar-divider"> </div>
              <li className="nav-bar-link">
                <a href="/">
                <span className="user-name">ALessandro Vitorio</span>
                  <img className="avatar" src={Avatar} alt="Avatar"/>
                </a>
              </li>
          </ul>
          </nav>
       
      </header>
    )
}