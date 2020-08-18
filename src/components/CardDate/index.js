import React from 'react';
import './style.css';
export default function Card (props) {
    return(
    <div className="card1" id={props.id} >
        <div className="card-date">
                <h4 >{props.name}</h4>
                <h1>{props.number}</h1>
        </div>
        <div className="card-icon">
           <i>{props.icon}</i> 
        </div>           
    </div>
    )
}
