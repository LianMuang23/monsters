import React from "react";
import './cardlist.style.css';
import { Card } from "./Card";

export const CardList = (props)=>{
    return (<div className="card-list">
    {props.monsters.map((monster)=> <Card key={monster.id} monster={monster}/>)}
    </div>)
}