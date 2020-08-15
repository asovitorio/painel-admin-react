import React,{useState} from 'react';
import './style.css'
import Header from '../Header';
import Section from '../Section';
import Footer from '../Footer';


export default function Main(){
    const [sidebarOpen,setSidebarOpen] = useState(false)
    const toogle = ()=>{
        if(!sidebarOpen){
            setSidebarOpen(true)
        }else{
            setSidebarOpen(false)
        }
    }
    
    return(
       
        <main>
        <Header nav={toogle} />
        <Section />
        <Footer />
        </main>
    )
}

