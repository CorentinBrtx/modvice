import React from 'react';
import './Connect.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";


class Connect extends React.Component {

    submitConnexion(e) {
        e.preventDefault()
        var username = document.getElementById("username_co").value
        var password = document.getElementById("password_co").value
		this.props.history.push("/home?username="+username);
    }

    submitInscription(e) {
        e.preventDefault()
        var username = document.getElementById("username_ins").value
        var age = document.getElementById("age").value
        var password = document.getElementById("password_ins").value
        var password_bis = document.getElementById("password_bis").value
        console.log(password)
        console.log(password_bis)
        if (password != password_bis) {
            alert("Entrez deux fois le même mot de passe")
        } else {
            this.props.history.push("/home?username="+username)
        }
    }
    
    render () {
        return (
            <div className="Connect">
                <h1>Modvice</h1>

                <div className="column-layout">
    
                    <div className="Connexion">
                        <form onSubmit = {this.submitConnexion.bind(this)} >
                            <label for="username_co">Nom d'utilisateur : </label>
                            <input type="text" name="username" id="username_co" required/>
                            
                            <label for="password_co">Mot de passe : </label>
                            <input type="password" name="password" id="password_co"/>

                            <input type="submit" value="Se connecter" />
                        </form>
                    </div>
        
                    <div className="Inscription">
                        <form onSubmit = {this.submitInscription.bind(this)}>
                            <label for="username_ins">Nom d'utilisateur : </label>
                            <input type="text" name="username" id="username_ins" required/>
                            
                            <label for="age">Age :</label>
                            <input type="number" name="age" id="age" required/>

                            <label for="password_ins">Mot de passe : </label>
                            <input type="password" name="password" id="password_ins" required/>

                            <label for="password_bis">Remettez votre mot de passe : </label>
                            <input type="password" name="password_bis" id="password_bis"/>

                            <input type="submit" value="S'inscrire" />
                        </form>
                    </div>  

                </div>  
            </div>
        )
    }
}

export default Connect;