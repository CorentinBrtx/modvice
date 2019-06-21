import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Select, { components } from 'react-select';
import './Home.css'
import superagent from 'superagent';


const CustomOption = ({innerRef, innerProps}) =>
    <div {...innerProps} ref={innerRef} to={"/"}/>


function Home ({match}) {

    const formatOptionLabel = (...props) => (console.log('props', props), <Link to={'/movie/'+ match.params.username + "/"+ props[0].movie.title} className="searchResult">{props[0].movie.title}</Link>)

    const [movies, setMovies] = React.useState(null);
    const [bestMovies, setBestMovies] = React.useState(null);
    const [forMe, setForMe] = React.useState([]);

    React.useEffect(() => {
      superagent
        .get("http://localhost:5000/application/movies")
        .then(response => setMovies(response.body.movies));
    }, []);

    React.useEffect(() => {
        superagent
          .get("http://localhost:5000/application/moviesbest")
          .then(response => setBestMovies(response.body.movies))
          .catch(error => setBestMovies("Pas de film"));
      }, []);

    React.useEffect(() => {
        superagent
            .get("http://localhost:5000/application/moviesbestuser/"+match.params.username)
            .then(response => setForMe(response.body.movies))
            .catch(error => setForMe("Pas de film"));
    }, []);

    return((bestMovies && forMe) ?
        <div>
            <div className = "lien">
                <Link to={"/newmovie/"+match.params.username} className="linkCenter">Ajouter un nouveau film</Link>
                <Link to={"/user/"+match.params.username} className="linkRight">Mon compte</Link>
            </div>

            <div className="home">
                <div className="user1">   
                    <h1>Modvice</h1>
                </div>

                <div className="Search">
                    <Select
                    components={{ SelectContainer }}
                    styles={{
                        container: base => ({
                        ...base,
                        padding: 5,
                        marginLeft: "15rem",
                        marginRight: "15rem"
                        }),
                    }}
                    options={movies}
                    getOptionLabel={option =>
                        `${option.movie.title}`
                    }
                    getOptionValue={option => `${option}`}
                    formatOptionLabel={formatOptionLabel}
                    />
                </div>

                <br></br>

                <div className="column-layout">
                        
                    <div>
                        <h2 className="user2">
                            Pour vous : 
                        </h2>

                        <ol className="user5">
                            <div dangerouslySetInnerHTML={{ __html: forMe.slice(0,10).map(
                            best => ("<li>"+best.movie.title+" : "+best.movie.mean+"/10 </li>")
                            ).join("<br>")} } />
                        </ol>  

                    </div> 
                    <div>
                        <h2 className="user4">Populaires</h2>   
                        
                        <ol className="user5">
                            <div dangerouslySetInnerHTML={{ __html: bestMovies.slice(0,10).map(
                            best => ("<li>"+best.movie.title+" : "+best.movie.mean+"/10 </li>")
                            ).join("<br>")} } />
                        </ol>      
                    </div>
                </div>
                
            </div>
        </div>
        : <div>Loading</div>
    )};

const SelectContainer = ({ children, ...props }) => {
    return (
        <components.SelectContainer {...props}>
            {children}
        </components.SelectContainer>
    );
};

export default Home;
      
