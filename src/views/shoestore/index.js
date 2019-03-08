import React, { Component } from 'react';
import './index.css';
import ProductCard from '../../components/productCard';




class Shoestore extends Component {


  render() {
    return (
      <div className="container">
              <ProductCard products={this.props.products} addItem={this.props.addItem}/>

      </div>

    );
  }
}

export default Shoestore;
