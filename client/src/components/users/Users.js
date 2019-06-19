import React from 'react';
import './Users.css'



function Users () {
    return(
        <div className="user">
            <div className="title">   
                <h1>Mon compte</h1>
            </div>

            <div class="column-layout">
    
                <div className="align">
                    <h2>Informations utilisateur : </h2>

                    <h4>nom utilisateur : jean</h4>
                    <h4>age : 12</h4>
                </div> 

                <div className="align">
                    <h2>Mes notes</h2>

                    <h4>hihi : 4/5</h4>                                 
                    <h4>star wars 2/5</h4>
                </div>        
            </div>
        </div>  
    )
  }

export default Users;