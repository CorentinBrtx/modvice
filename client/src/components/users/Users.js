import React from 'react';
import './Users.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Users () {
   
   
    const [user, setUser] = useState(null);
    useEffect(() => {
    superagent
    .get("http://localhost:5000/application/user/coco")
    .then(response => setUser(response.body.user));
    }, []);
   
    return(

        <div className="user">

            <div className="bouton">
            <Link to="/home">Home</Link>
            </div>
            <div className="title">   
                <h1>Mon compte</h1>
            </div>

            <div class="column-layout">
    
                <div className="align">
                    <h2 className="title2">Informations utilisateur : </h2>

                    <h4>nom utilisateur : jean</h4>
                    <h4>age : 12</h4>
                </div> 

                <div className="align">
                    <h2 className="title2">Mes notes</h2>

                    <h4>hihi : 4/5</h4>                                 
                    <h4>star wars 2/5</h4>
                </div>        
            </div>
            const [user, setUser] = useState(null);


        </div>  
    )
  }

export default Users;