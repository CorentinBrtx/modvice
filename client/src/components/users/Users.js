import React from 'react';
import './Users.css'



function Users () {
 return(
 <div className="user">

<div className="user1">   
                <h1>Mon compte</h1>
        </div>



  <div class="column-layout">
        

   <div>     
        <div className="user2">
            <h2>Informations utilisateur : </h2>
        </div>


        <div className="user3">
            <h4>nom utilisateur : jean</h4>
            <h4>age : 12</h4>
        </div>
   </div> 
   <div>
        <div className="user4">
            <h2>Mes notes</h2>
        </div>    

        <div className="user5">
            <h4>hihi : 4/5</h4>                                 
            <h4>star wars 2/5</h4>
   </div>        
  </div>
 </div>
                


                 
                   
        

                     

         
      </div>
  
    )
  
  }

export default Users;