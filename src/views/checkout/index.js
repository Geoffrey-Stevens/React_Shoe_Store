import React, { Component } from 'react';
import './index.css';
import CheckoutTable from '../../components/checkoutTable';
import Shoestore from '../shoestore';



class Checkout extends Component {



  render() {
    return (
      <div className="container">
      <h1>Checkout Page</h1>
              <CheckoutTable cart={this.props.cart} removeItem={this.props.removeItem}/>
            </div>

    );
  }
}

export default Checkout;
