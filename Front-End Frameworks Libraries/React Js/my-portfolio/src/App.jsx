import React from 'react';
import './components/App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import './index.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./components/Product.jsx";
import { productData, responsive } from "./components/data.js";
import './scrollbar.css'


function App() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
      github = {item.github}
      linkedin = {item.linkedin}
    />
  ));
  return (
    <div className='project-heading'>
      <Header />
      <Home />
      <About />
      <div className="App">
        <br />
      <h1>Projects</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
      <Footer />
    </div>
  );
}

export default App;
