import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Users.css';
import superagent from 'superagent';


function Users ({match}) {

    const [user, setUser] = React.useState(null);
    const [notes, setNotes] = React.useState(null);

     
      React.useEffect(() => {
         superagent
         .get("http://localhost:5000/application/user/"+match.params.username)
         .then(response => setUser(response.body.user));
     }, []);

     React.useEffect(() => {
        superagent
        .get("http://localhost:5000/application/Notation/user/"+match.params.username)
        .then(response => setNotes(response.body.notations))
        }, []);


        console.log(user)

    return((notes && user) ?

        <div> 
            <div className="accueil">
                <Link to={"/home/"+match.params.username}>Accueil</Link>
            </div>


            <div className="title">            
                <h1>Mon espace</h1>    
            </div>
            


            <div className="column-layout">               

                <div className="Infos">
                    <h2>Mes infos</h2>
                    <ul><li>{user.age} ans</li></ul>
                </div>

                <div className="notes">
                    <h2>Mes notes : </h2>              
                    <ul> <li>{notes.map(note => (note.movie_title+ ":" + note.value +"/10"))} </li></ul>
                </div>

            </div>
        </div>



        : <div>Loading</div>    

        )}



    
    
 export default Users;

