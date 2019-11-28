import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Produtos from './components/Productos';



function App() {
  const fecha = new Date().getFullYear();


  return (
    <Fragment>
      <Header
        titulo='Tienda Virtual'
      />
      <Produtos/>

      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
