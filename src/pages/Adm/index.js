import React, {useState} from 'react';
import Aside from '../../components/Aside';
import Main from '../../components/Main';
import Toogle from '../../components/Toogle'

import './style.css'


export default function Adm(){
    const [sidebarOpen,setSidebarOpen] = useState(true)
    const toogle = ()=>{
        if(!sidebarOpen){
            setSidebarOpen(true)

        }else{
            setSidebarOpen(false)
        }
        console.log(sidebarOpen)
    }
    const menuClose = ()=>{
        setSidebarOpen(false)
    }
    let menuNav;
  
        if(sidebarOpen){
        menuNav = <Aside close={menuClose} menu={"menu-nav"} /> 
        }
    
    return (
        
        <div className="body">
        <Toogle menu = {toogle} />
         {menuNav}
       <Main /> 
       </div>
    )
}