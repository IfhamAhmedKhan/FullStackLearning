import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

export default function Product(props) {
  return (
<div className="card-container" id="project">
    <div className="card" style={{ backgroundColor: '#ffffff' }}>
        <div className="border-adding" style={{backgroundColor: '#333333'}}>
            
        </div>
        <div className="image">
                <img className="product--image" src={props.url} alt="product image" />
                </div>
        <div class="media-icons">
                    <a href={props.linkedin} target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
                    <a href={props.github} target="_blank"><i class="fab fa-github fa-2x"></i></a>
                </div>
                <br />
                <div className="details">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                </div>
      
                </div>
    </div>
  );
}
