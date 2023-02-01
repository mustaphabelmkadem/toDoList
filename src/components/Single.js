import React from 'react';
import { useParams, Link } from 'react-router-dom';
import dataProducts from '../data/dataProducts.json';

const Single = () => {
  const { id } = useParams();
  //console.log(dataProducts);
  const product = dataProducts.filter((product) => product.id === parseInt(id));

  return (
    <div class="card" style={{ width: '13.8rem', margin: '2rem auto' }}>
      <img
        src={`/img/${product[0].thumbnail}`}
        className="card-img-top"
        alt={product[0].title}
      />
      <div className="card-body">
        <p className="card-title">{product[0].title}</p>
        <p className="card-text">{product[0].price}</p>

        <button type="button" className="btn btn-primary">
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            Acceuil
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Single;
