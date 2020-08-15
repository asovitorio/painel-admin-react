import React from 'react';
import {FaBars} from 'react-icons/fa'
import './style.css'

export default function Toogle(props){
    return(
       
        <button className="toogle" onClick={props.menu}>
            <FaBars />
        </button>
        
    )
}