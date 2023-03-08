import React from 'react';
import "./Card.scss";
import img from "../../assets/img/clock.png";

const Card = (props) => {
  return (
            <div className="card m-5">
              <img src={img} class="card-img-top" alt="/"/>
              <div className="card-body p-3">
                <h3 className="card-title text-center">{props.project.name}</h3>
                <p className="card-text">{props.project.description}</p>
                <a href="/" class="btn btn-primary">ddd</a>
              </div>
            </div>
  )
}

export default Card;
