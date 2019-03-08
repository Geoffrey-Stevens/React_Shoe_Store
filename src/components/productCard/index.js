import React, { Component } from 'react';
import './index.css';


// if (item == 1 || item%3 ==1)

class ProductCard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
     {this.props.products &&
        this.props.products.map( item =>
            <div  id="product" className="col-md-4 top-margin-sm bottom-margin-sm">
              <div className="card">
                <div className="card-img-top">
                  <img src="http://placehold.it/250x250" alt="placeholder image" className="product-img"/>
                </div>
                <div className="card-title">{item.name}</div>
                <div className="card-subtitle">${item.price}</div>
                <div>
                <select id={item.id}>
                {item.sizes.map( size =>
                    <option value={size}>{size}</option>

                )}
                </select>
                </div>
                <div className="card-text">
                  <p>{item.desc}</p>
                </div>
                <button className="btn btn-primary" onClick={() => this.props.addItem(item.id)}>Add to Cart</button>
              </div>
            </div>

      )
    }
  </div>
</div>
);
}
}

export default ProductCard;
