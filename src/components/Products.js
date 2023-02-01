import React from 'react';
import Product from './Product';
import dataProducts from '../data/dataProducts';

const Products = () => {
  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <div className="row" style={{ justifyContent: 'center' }}>
        {dataProducts.map((produit, index) => {
          return <Product key={index} data={produit} />;
        })}
      </div>
    </div>
  );
};

export default Products;
