import React from 'react';
import './Search.css';
import Select, { components } from 'react-select';
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


function Search() {
    return (
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
    );
  }

  
const SelectContainer = ({ children, ...props }) => {
    return (
        <components.SelectContainer {...props}>
        {children}
      </components.SelectContainer>
    );
  };
  


  
export default Search;
