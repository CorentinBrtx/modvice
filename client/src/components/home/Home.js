import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Select, { components } from 'react-select';
import './Home.css'
import superagent from 'superagent';


const CustomOption = ({innerRef, innerProps}) =>
    <div {...innerProps} ref={innerRef} to={"/"}/>


function Home ({match}) {
    const formatOptionLabel = (...props) => (console.log('props', props), <Link to={'/movie/'+ match.params.username + "/"+ props[0].movie.title} >{props[0].movie.title}</Link>)
    const [movies, setMovies] = React.useState(null);
    React.useEffect(() => {
      superagent
        .get("http://localhost:5000/application/movies")
        .then(response => setMovies(response.body.movies));
    }, []);
  console.log(movies)
 return(
    <div className="home">

        <Link to={"/user/"+match.params.username}>Mon compte</Link>

        
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



        <div className="column-layout">
                

            <div>     
                    <div className="user2">
                        <h2>Pour vous : </h2>
                    </div>


                    <div className="user3">
                        <h4>hihi</h4>
                        <h4>star wars</h4>
                    </div>
            </div> 
            <div>
                    <div className="user4">
                        <h2>Populaires</h2>
                    </div>    

                    <div className="user5">
                        <h4>coucou</h4>                                 
                        <h4>corentin is big </h4>
                    </div>        
            </div>
        </div>
    </div>
  )};

const SelectContainer = ({ children, ...props }) => {
    return (
        <components.SelectContainer {...props}>
            {children}
        </components.SelectContainer>
    );
};

export default Home;
      
