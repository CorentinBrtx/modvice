import React from 'react';
import './Connect.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import superagent from 'superagent';


function submitInscription(e) {
    console.log(e)
    var username = e.username
    var age = e.age
    var password = e.password
    var password_bis = e.password_bis
    console.log(password)
    console.log(password_bis)
    if (password != password_bis) {
        alert("Entrez deux fois le même mot de passe")
    } else {
        this.props.history.push("/home/"+username)
    }
}


function Connect(props) {

    const submitConnexion = (event) => {
        event.preventDefault()
        var username = event.target[0].value
        var password = event.target[1].value
    
        superagent
        .post("http://localhost:5000/application/authenticate")
        .send({username: username, password: password})
        .then(response => props.history.push("/home/"+username))
        .catch(error => {alert("Nom d'utilisateur ou mot de passe incorrect");
                props.history.push("/connect")})
    }

    return (
        <div className="Connect">
            <h1>Modvice</h1>

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
                    <form onSubmit = {submitInscription.bind(this)}>
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
    )
}

export default Connect;