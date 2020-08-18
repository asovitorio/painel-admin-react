import React from 'react';
import './style.css'
import {FaClipboardList,FaDollarSign,FaUserCheck} from 'react-icons/fa'
import CardDate from '../CardDate'
import CardProduct from '../CardProduct' 
import ImageDumy from '../ImageDumy'
import CardCategory from '../CardCategory'


export default  function Section(){
        const category = [1,2,3,4,5,6]
    return (
        <section>
        <h1 className="title">App Dashboard</h1>
        <article className="card-group">
        <CardDate id="blue" name="PRODUCTS IN DATA BASE" number="135"  icon={<FaClipboardList size={50} color="#d3d3d3" />} />
        <CardDate id="green"  name="AMOUNT IN PRODUCTS" number="$546.456"  icon={<FaDollarSign size={50} color="#d3d3d3" />} />
        <CardDate id="yellow" name="USER QUANTITY" number="38"  icon={<FaUserCheck size={50} color="#d3d3d3" />} />
        </article>
        <article className="row">
        <CardProduct title="Last product in Data Dase" content={<ImageDumy />} paragrafo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet sapiente corrupti consequuntur beatae distinctio nemo iste laboriosam officiis dicta. Similique illo asperiores cumque accusantium illum possimus tempore, fugit porro impedit?" link="View product detail" />
        <CardProduct title="Categories in Data Base" content={<CardCategory cat ={category} />}  />
        </article>
        </section>
        
    )
}