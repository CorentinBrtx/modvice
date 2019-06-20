import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Users.css';
import superagent from 'superagent';


function Users ({match}) {
    var notes = null;

    const [user, setUser] = React.useState(null);

     
      React.useEffect(() => {
         superagent
         .get("http://localhost:5000/application/user/"+match.params.username)
         .then(response => setUser(response.body.user));
     }, []);

     React.useEffect(() => {
        superagent
        .get("http://localhost:5000/application/Notation/user/"+match.params.username)
        .then(response => {notes = response.body.notations;
                            notes = notes.map((note) => [{title: note.movie_title, note: note.value}] );});
        }, []);


        console.log(user)

 

    return((notes) ?


        <div> 
            <Link to={"/home/"+match.params.username}>Accueil</Link>
            <h1>Bonjour {user.username}</h1>

            <div className="Infos">
                <ul><li>Age {user.age}</li></ul>
            </div>

            <div>
                <h2>vos notes : </h2>
            </div>

            <div>
                <ul> {notes.map(note => ("<li>"+ note.title+ ":" + note.note +"/10"+ "</li>"))} </ul>
            </div>


        </div>



        : <div>Loading</div>    

        )}



    
    
 export default Users;

