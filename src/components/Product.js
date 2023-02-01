import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  return (
    <div
      className="card"
      style={{ width: '14rem', marginRight: '1rem', marginBottom: '1rem' }}
    >
      <Link to={`/product/${props.data.id}`}>
        <img
          src={`./img/${props.data.thumbnail}`}
          className="card-img-top"
          alt={props.data.title}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{props.data.title}</h5>
        <p className="card-text">{props.dataprice}</p>
        <a href="/" className="btn btn-primary">
          Buy now
        </a>
      </div>
    </div>
  );
};

export default Product;
