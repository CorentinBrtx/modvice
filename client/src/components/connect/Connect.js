import React from 'react';
import './Connect.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import superagent from 'superagent';

function Connect(props) {

    const submitConnexion = (event) => {
        event.preventDefault()
        var username = event.target[0].value
        var password = event.target[1].value
    
        superagent
        .post("http://localhost:5000/application/authenticate")
        .send({username: username, password: password})
        .then(response => props.history.push("/home/"+username))
        .catch(error => alert("Nom d'utilisateur ou mot de passe incorrect"))
    }

    const submitInscription = (event) => {
        event.preventDefault()
        var username = event.target[0].value
        var age = event.target[1].value
        var password = event.target[2].value
        var password_bis = event.target[3].value

        if (password != password_bis) {
            alert("Entrez deux fois le même mot de passe")
        } else {
            superagent
            .post("http://localhost:5000/application/user/"+username)
            .send({age: age, password: password})
            .then(response => props.history.push("/home/"+username))
            .catch(error => alert("Ce nom d'utilisateur est déjà utilisé"))
        }
    }

    return (
    
        <div>

            <div className="Couleur">
                <h1>Modvice</h1>
            </div>

            <div className="Connect">

        
                <div className="column-layout">

                    <div className="Connexion">
                        <form onSubmit = {submitConnexion} >
                            <label>Nom d'utilisateur : </label>
                            <input type="text" name="username" id="username_co" required/>
                        
                            <label>Mot de passe : </label>
                            <input type="password" name="password" id="password_co"/>

                            <input type="submit" value="Se connecter" />
                        </form>
                    </div>
    
                    <div className="Inscription">
                        <form onSubmit = {submitInscription}>
                            <label>Nom d'utilisateur : </label>
                            <input type="text" name="username" id="username_ins" required/>
                        
                            <label>Age :</label>
                            <input type="number" name="age" id="age" required/>

                            <label>Mot de passe : </label>
                            <input type="password" name="password" id="password_ins" required/>

                            <label>Remettez votre mot de passe : </label>
                            <input type="password" name="password_bis" id="password_bis"/>

                            <input type="submit" value="S'inscrire" />
                        </form>
                    </div>  

                </div>  
            </div>
        </div>
    )
}

export default Connect;