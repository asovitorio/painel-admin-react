import React from 'react';
import './style.css'
import {FaClipboardList,FaDollarSign,FaUserCheck} from 'react-icons/fa'
import Card from '../../components/Card'

export default  function Section(){

    return (
        <section>
        <h1 className="title">App Dashboard</h1>
        <article className="card-group">
        <Card id="blue" name="PRODUCTS IN DATA BASE" number="135"  icon={<FaClipboardList size={50} color="#d3d3d3" />} />
        <Card id="green"  name="AMOUNT IN PRODUCTS" number="$546.456"  icon={<FaDollarSign size={50} color="#d3d3d3" />} />
        <Card id="yellow" name="USER QUANTITY" number="38"  icon={<FaUserCheck size={50} color="#d3d3d3" />} />
        </article>
        </section>
    )
}