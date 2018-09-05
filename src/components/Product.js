import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="thumbnail">
            <img
              src="https://cdn.shopify.com/s/files/1/1607/0699/products/sony-xperia-z-purple-dubai-fushanj-com-best-price-original-dubai-abudhabi-rasalkhimah_530x.jpg?v=1518513254 "
              alt=""
            />
            <div className="caption">
              <h3>Sony experia Z</h3>
              <p>Giá: 18.000.000 đ</p>
              <p>
                <a className="btn btn-primary">Mua hàng</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
