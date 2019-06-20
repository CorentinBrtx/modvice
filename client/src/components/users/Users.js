import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Users.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

<<<<<<< HEAD
function Users () {
   
   
    const [user, setUser] = useState(null);
    useEffect(() => {
    superagent
    .get("http://localhost:5000/application/user/coco")
    .then(response => setUser(response.body.user));
    }, []);
   
=======
function Users ({match}) {
>>>>>>> 0f9e3048de91517f60a0ec539498dc22deccef93
    return(

        <div className="user">

<<<<<<< HEAD
            <div className="bouton">
            <Link to="/home">Home</Link>
            </div>
=======
            <Link to={"/home/"+match.params.username}>Accueil</Link>
>>>>>>> 0f9e3048de91517f60a0ec539498dc22deccef93
            <div className="title">   
                <h1>Mon compte</h1>
            </div>

            <div className="column-layout">
    
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