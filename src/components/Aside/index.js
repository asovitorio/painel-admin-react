import React,{useState} from 'react'
import './style.css'
import {FaChartLine,FaTachometerAlt,FaFolder,FaChartArea,FaTable} from 'react-icons/fa'
export default function Aside(props){
    const [classMenuNav,setClassMenuNav] = useState(props.menu)
    const closeMenu = (e) =>{
        e.preventDefault();
        setClassMenuNav("menu-nav close");
        setTimeout(() =>{
            props.close()
        },700)
    }
    return (
       <aside>
        <ul className= {classMenuNav} id="accordionSidebar" >
          <div className="close-menu"><button className="close-button" onClick={closeMenu}>X</button></div>  
       <a href="/" className="nav-title">
        <div className="nav-title-icon">
            <FaChartLine color="#fff" size={28} />
        </div>
        <div className = "nav-title-name">
            ADMIN
        </div>
       </a>
       <hr/>
       <li className="nav-item">
        <a href="/" className="nav-link">
           <i><FaTachometerAlt /></i>
           <span>Dashboard</span>
        </a>
       </li>
       <hr/>
       <div className="nav-actions">Actions</div>
       <li className="nav-item-action" >
       <i><FaFolder size={17} color="rgba(255,255,255,0.7)"/></i>
           <span >Pages</span>
       </li>
       <li className="nav-item-action" >
       <i><FaChartArea size={17} color="rgba(255,255,255,0.7)"/></i>
           <span>Charts</span>
       </li>
       <li className="nav-item-action" >
       <i><FaTable size={17} color="rgba(255,255,255,0.7)"/></i>
           <span>Tables</span>
       </li>
       <hr/>
        </ul>   
       </aside> 
    )
}