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

            <Link to={"/home/"+props.match.params.username}>Accueil</Link>
            <Link to={"/user/"+props.match.params.username}>Mon compte</Link>

            <h1> Ajout d'un nouveau film </h1>

            <form onSubmit = {submitNewMovie}>
                <label>Nom du film : </label>
                <input type="text" name="title" required />

                <label>Date de sortie : </label>
                <input type="year" name="date" required />

                <label>Producteur : </label>
                <input type="text" name="producer" />

                <label>Acteur principal : </label>
                <input type="text" name="actor1" />

                <label>Acteur secondaire : </label>
                <input type="text" name="actor2" />

                <input type="submit" value="Enregistrer le film"/>
            </form>

        </div>
    )
}

export default NewMovie;