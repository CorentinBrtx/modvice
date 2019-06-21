import React from 'react';
import './NewMovie.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import superagent from 'superagent';

function NewMovie (props, {match}) {

    const submitNewMovie = (e) => {
        e.preventDefault()
        var title = e.target[0].value
        var date = e.target[1].value
        var producer = e.target[2].value
        var actor1 = e.target[3].value
        var actor2 = e.target[4].value

        superagent
        .post("http://localhost:5000/application/movie/"+title)
        .send({date: date, producer: producer, actor1: actor1, actor2: actor2})
        .then(response => props.history.push("/home/"+props.match.params.username))
        .catch(error => alert("Ce film est déjà enregistré"))
    }

    return(
        <div className="NewMovie">

            <Link to={"/home/"+props.match.params.username} className="linkLeft">Accueil</Link>
            <Link to={"/user/"+props.match.params.username} className="linkRight">Mon compte</Link>

            <div className="title">  
                <h1> Ajout d'un nouveau film </h1>
            </div>

            <form onSubmit = {submitNewMovie} className="connectForm">
                <label className="connectLabel">Nom du film : </label>
                <input type="text" name="title" required className="connectInput"/>

                <label className="connectLabel">Date de sortie : </label>
                <input type="year" name="date" required className="connectInput"/>

                <label className="connectLabel">Producteur : </label>
                <input type="text" name="producer" className="connectInput"/>

                <label className="connectLabel">Acteur principal : </label>
                <input type="text" name="actor1" className="connectInput"/>

                <label className="connectLabel">Acteur secondaire : </label>
                <input type="text" name="actor2" className="connectInput"/>

                <input type="submit" value="Enregistrer le film" className="connectSubmit"/>
            </form>

        </div>
    )
}

export default NewMovie;