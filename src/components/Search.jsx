import React from "react";
import './search.css';

export const SearchBox = ({placeholder, eventHandler})=> (
    <input className="search"
     type='search'
     placeholder= {placeholder}
    onChange={eventHandler}/>
)