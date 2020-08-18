
import React from 'react';
import './style.css';

export default function CardProduct (props){
    function exibirParagrafo (p){
        if(p.paragrafo === undefined){
           
            return ""
        }else{
            return( <p className="row text-justify paragrafo m-0">{p.paragrafo}</p>)
        }
       
        }        
         function exibirLink (p){
        if(p.link === undefined){
           
            return ""
        }else{
            return(  <a className="text-justify m-3 " href="/">{p.link}</a>)
        }
       
        }        
        

    return (
        
          <div className="col mb-4">
          <div className="card">
                <div className="card-header">
                   <h6 className="m-0 font-weight-bold text-primary" >{props.title}</h6> 
                </div>
                <div className="card-body row">
                {props.content}
                </div>
                 {exibirParagrafo(props)}
                 {exibirLink(props)}
           
            </div>
          </div>       
    )
}

