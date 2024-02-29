import React from 'react'
import ProductCard from "../components/ProductCard"
import { data } from '../BOLD/ProductBold'


const Products = () => {
    return (
      <div>
        <h1>Product Page</h1>
        <div className="row">
          {data.map((product) => {
            return (
              <div className="col-12 col-md-4 gap-3" key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  export default Products;
