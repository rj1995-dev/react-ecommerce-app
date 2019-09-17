import React from "react";
import { ProductConsumer } from "../../context";
import PaypalBtn from "./PaypalBtn";
export default function CartTotals({ history }) {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {value => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >
                  clear cart
                </button>
                <h3 className=" text-capitalize">
                  subtotals : ₹{cartSubTotal}
                </h3>
                <h3 className=" text-capitalize">tax : ₹{cartTax}</h3>
                <h3 className=" text-capitalize">total : ₹{cartTotal}</h3>
                <PaypalBtn
                  history={history}
                  cartTotal={cartTotal}
                  clearCart={clearCart}
                />
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
