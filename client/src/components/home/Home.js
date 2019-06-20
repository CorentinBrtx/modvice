import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Select, { components } from 'react-select';
import './Home.css'
const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];

function Home ({match}) {
 return(
    <div className="home">

        <Link to={"/user/"+match.params.username}>Mon compte</Link>

        
        <div className="user1">   
                        <h1>Modvice</h1>
        </div>

        <div className="Search">
            <Select
            closeMenuOnSelect={false}
            components={{ SelectContainer }}
            styles={{
                container: base => ({
                ...base,
                backgroundColor: colourOptions[2].color,
                padding: 5,
                }),
            }}
            options={colourOptions}
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
      