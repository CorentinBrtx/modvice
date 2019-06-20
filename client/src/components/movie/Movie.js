import React from 'react';
import './Movie.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import superagent from 'superagent';

function Movie ({match}) {

    var notes = null;

    const [movie, setMovie] = React.useState(null);
    const [mean, setMean] = React.useState(null);
    const [ownNote, setOwnNote] = React.useState(null);
    
    React.useEffect(() => {
        superagent
        .get("http://localhost:5000/application/movie/"+match.params.movie_title)
        .then(response => setMovie(response.body.movie));
    }, []);
    React.useEffect(() => {
        superagent
        .get("http://localhost:5000/application/Notation/"+match.params.movie_title+"/"+match.params.username)
        .then(response => setOwnNote(response.body.notation.value));
    }, []);
    React.useEffect(() => {
        superagent
        .get("http://localhost:5000/application/Notation/movie/"+match.params.movie_title)
        .then(response => {notes = response.body.notations;
                            notes = notes.map((note) => note.value);
                            let sum = notes.reduce((previous, current) => current += previous);
                            let avg = sum / notes.length; 
                            setMean(avg)});
    }, []);
    console.log(ownNote)
    console.log(mean)
    return ((movie && mean && ownNote) ?
        <div>
            <div className="liens">
                <Link to={ "/home/" + match.params.username }> Accueil</Link> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                 <Link to={ "/user/" + match.params.username }>Mon compte </Link>
                
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
                <h2>Votre note :</h2>

                <p>{ownNote} / 10</p>
            </div>
            </div>
        </div>
        </div>
        : <div>Loading</div>
    )
}

export default Movie;