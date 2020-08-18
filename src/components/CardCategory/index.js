import React,{Fragment} from 'react';
import './style.css';
export default function Card(props){
    const category = props.cat!==undefined?props.cat:["sem categorias"]
    return(
    <Fragment>
            <div class="row">
                {category.map(item=>(
            <div className="col-sm-6">
                    <div className="card text-white bg-info mb-3 card-category">
                    <div className="card-body category">
                        <h5 className="card-title title-categoria">Category: {item} </h5>
                    </div>
                    </div>
            </div>
                ))}
    </div>
 </Fragment> 
    )
}