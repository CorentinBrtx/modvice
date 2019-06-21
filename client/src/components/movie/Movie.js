import React from 'react';
import './Movie.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import superagent from 'superagent';

function Movie (props) {

    var notes = null;

    const [movie, setMovie] = React.useState(null);
    const [mean, setMean] = React.useState(null);
    const [ownNote, setOwnNote] = React.useState(null);
    
    React.useEffect(() => {
        superagent
        .get("http://localhost:5000/application/movie/"+props.match.params.movie_title)
        .then(response => setMovie(response.body.movie));
    }, []);

    React.useEffect(() => {
        superagent
        .get("http://localhost:5000/application/Notation/"+props.match.params.movie_title+"/"+props.match.params.username)
        .then(response => setOwnNote(response.body.notation.value))
        .catch(error => setOwnNote(-1));
    }, []);

    React.useEffect(() => {
        superagent
        .get("http://localhost:5000/application/Notation/movie/"+props.match.params.movie_title)
        .then(response => {notes = response.body.notations;
                            notes = notes.map((note) => note.value);
                            let sum = notes.reduce((previous, current) => current += previous);
                            let avg = sum / notes.length; 
                            setMean(avg)})
        .catch(error => setMean("-"));
    }, []);

    const submitNote = (e) => {
        e.preventDefault()
        var note = e.target[0].value

        superagent
        .post("http://localhost:5000/application/Notation/"+props.match.params.movie_title+"/"+props.match.params.username)
        .send({value: note})
        .then(response => {window.location.reload()})
        .catch(error => alert("Nom d'utilisateur ou mot de passe incorrect"))
    }

    return ((movie && mean && ownNote>=0) ?
        <div>
            <div className="liens">
                <Link to={ "/home/" + props.match.params.username } className="linkLeft"> Accueil</Link>
                <Link to={ "/user/" + props.match.params.username } className="linkRight">Mon compte </Link>
                
            </div>

            <div className="title">
                <h1>{movie.title}</h1> 
            </div>
            <div className="column-layout">  
                
                <div className="Infos1">
                    <h2>Informations sur le film</h2>

                    <ul>
                        <li>Producteur : {movie.producer}</li>
                        <li>Acteur principal : {movie.actor1}</li>
                        <li>Acteur secondaire : {movie.actor2}</li>
                        <li>Date de sortie : {movie.date}</li>
                    </ul>
                </div>
                <div className = "2Notes">
                    <div className="Notes">
                        <h2>Notes du film</h2>

                        <p>Moyenne : {mean}/10</p>
                    </div>

                    <div className="VotreNote">
                        <h2>Votre note :</h2>

                        <p>{ownNote}/10</p>
                    </div>
                </div>
            </div>
        </div>

        : ((movie && mean && ownNote<=0) ? 
        <div>
            <div className="liens">
                <Link to={ "/home/" + props.match.params.username } className="linkLeft"> Accueil</Link>
                <Link to={ "/user/" + props.match.params.username } className="linkRight">Mon compte </Link>
                
            </div>

            <div className="title">
                <h1>{movie.title}</h1> 
            </div>

            <div className="column-layout">  

                <div className="Infos1">
                    <h2>Informations sur le film</h2>

                    <ul>
                        <li>Producteur : {movie.producer}</li>
                        <li>Acteur principal : {movie.actor1}</li>
                        <li>Acteur secondaire : {movie.actor2}</li>
                        <li>Date de sortie : {movie.date}</li>
                    </ul>
                </div>

                <div className = "2Notes">
                    <div className="Notes">
                        <h2>Notes du film</h2>

                        <p>Moyenne : {mean} / 10</p>
                    </div>

                    <div className="VotreNote">
                        <h2>Noter ce film : </h2>

                        <form onSubmit={submitNote}>
                            <input type="number" name="note"/>

                            <input type="submit" value="Noter"/>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        : <div>Loading</div>)
    )
}

export default Movie;