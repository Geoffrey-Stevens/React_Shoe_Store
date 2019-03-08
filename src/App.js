import React, { Component } from 'react';
import './App.css';
import  {Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Shoestore from './views/shoestore';
import Checkout from './views/checkout';
import products from './products';

class App extends Component {
  constructor(){
    super();
    this.state ={
      'products': [],
      'cart': []
    }
  }

  componentWillMount(){
      this.setState({ 'products': products });
  }

  removeItem = id =>{
    let cart = this.state.cart;
    console.log(cart);

    for (let i in cart){
      if(cart[i].id == id){
        cart.splice(i,1);
        break;
      }
    }
    this.setState({'cart': cart });
  }

  addItem = id => {
   let cart = this.state.cart;


   for (let i in products){
     if (products[i].id == id){
       cart.push(products[i])
       break;
     }
   }
   this.setState({ 'cart': cart });
  }



  render() {
    return (
      <div className="App">
        <Header />

        <div className="conatiner">
        <Switch>
          <Route exact path='/' render={() => <Shoestore
             products={this.state.products}
             addItem={this.addItem}/>}/>
          <Route exact path='/checkout' render={() => <Checkout cart={this.state.cart} removeItem={this.removeItem}/>}/>
        </Switch>
      </div>
      </div>
    );
  }
}






export default App;
