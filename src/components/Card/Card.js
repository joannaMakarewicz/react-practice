import React from 'react';
import "./Card.scss";
import img from "../../assets/img/clock.png";

const Card = (props) => {
  return (
            <div className="card">
              <img src={img} class="card-img-top" alt="/"/>
              <div className="card-body p-3">
                <h3 className="card-title text-center">{props.project.name}</h3>
                <p className="card-text">{props.project.description}</p>
                <a href={props.project.homepage} class="card__button btn" target="_blank" rel="noreferrer">demo</a>
                <a href={props.project.html_url} class=" card__button2 btn ms-3" target="_blank" rel="noreferrer">github</a>
              </div>
            </div>
  )
}

export default Card;
