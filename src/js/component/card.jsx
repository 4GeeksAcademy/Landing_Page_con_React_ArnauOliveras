import React from "react";


const Card = (props) => {
  return (
    <div class="col">
      <div class="card p-0">
        <img src={props.image} class="card-img-top" alt={props.title} />
        <div class="card-body text-center">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <a href="#" class="btn btn-primary">Find out more!</a>
        </div>
      </div>
    </div>
  );
};

export default Card;