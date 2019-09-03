import React from "react";
import { ProductConsumer } from "../../context";
import Title from "../Title";
import Product from "../Product";
import ProductsFilter from "./ProductsFilter";
export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        const { filterdProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              {/* title */}
              <Title center title="our products" />

              {/* products filter */}
              <ProductsFilter />
              {/* total count */}
              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    total products : {filterdProducts.length}
                  </h6>
                </div>
              </div>
              {/* products */}
              <div className="row py-5">
                {filterdProducts.length === 0 ? (
                  <div className="col text-title text-center">
                    sorry,no item matched your search
                  </div>
                ) : (
                  filterdProducts.map(product => {
                    return <Product key={product.id} product={product} />;
                  })
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
