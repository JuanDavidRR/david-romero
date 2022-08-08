import React from "react";

const Card = ({ title, img, description, link, id }) => {
  return (
    <li className="product-wrap">
      <article className="product">
        <div className="product-browser">
          <div className="product-circle"></div>
          <div className="product-circle"></div>
          <div className="product-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img className="product-image" src={img} alt={title} loading="lazy" />
        </a>
      </article>
      <div className="product-info">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
    </li>
  );
};

export default Card;
