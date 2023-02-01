import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Single from './components/Single';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<Single />} />
    </Routes>
  );
};

export default App;
