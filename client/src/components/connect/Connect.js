import React from 'react';
import './Connect.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import superagent from 'superagent';


class Connect extends React.Component {

    submitConnexion(e) {
        e.preventDefault()
        var username = document.getElementById("username_co").value
        var password = document.getElementById("password_co").value

        const [realPassword, setRealPassword] = React.useState(null);
        React.useEffect(() => {
            superagent
            .get("http://localhost:5000/application/user/"+username)
            .then(response => setRealPassword(response.body.user.password));
        }, []);

        if (password == realPassword) {
            this.props.history.push("/home/"+username);
        } else {
            alert("Mauvais mot de passe")
        }
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
            this.props.history.push("/home/"+username)
        }
    }
    
    render () {
        return (
            <div className="Connect">
                <h1>Modvice</h1>

                <div className="column-layout">
    
                    <div className="Connexion">
                        <form onSubmit = {this.submitConnexion.bind(this)} >
                            <label>Nom d'utilisateur : </label>
                            <input type="text" name="username" id="username_co" required/>
                            
                            <label>Mot de passe : </label>
                            <input type="password" name="password" id="password_co"/>

                            <input type="submit" value="Se connecter" />
                        </form>
                    </div>
        
                    <div className="Inscription">
                        <form onSubmit = {this.submitInscription.bind(this)}>
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
}

export default Connect;