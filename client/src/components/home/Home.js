import React from 'react';
import './Home.css'


import { BrowserRouter as Router, Route, Link } from "react-router-dom";



    
    
    
    function Home () {
        return(
            <div className="user">

                <div className="bouton">
                <Link to="/user">Accéder à mon compte</Link>
                </div>            

                <div className="title">   
                    <h1>Modvice</h1>
                </div>
    
                <div class="column-layout">
        
                    <div className="align">
                        <h2>Pour moi </h2>
    
                        <h4>hoho</h4>
                        <h4>miaou</h4>
                    </div> 
    
                    <div className="align">
                        <h2>Populairs</h2>
    
                        <h4>hihi</h4>                                 
                        <h4>waouf</h4>
                    </div>        
                </div>

            </div>  
        )
      }
    
    export default Home;
      