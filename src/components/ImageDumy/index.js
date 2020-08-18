import React from 'react';
import './style.css';
import ImgDumy from '../../assets/product_dummy.svg'

export default function ImageDumy(props){
    return(
        <div className="text-center">
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={ImgDumy} alt="Imagem-Dummy"/>
        </div>
    )
}

