import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart, cartTotal } = value;

        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              {cart.map(item => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    <img
                      src={`../${item.image}`}
                      alt="cart item"
                      width="35"
                      // src={item.image}---- furthur use of contentful
                    />
                    <div className="mt-3">
                      <h6 className="text-capitalize">{item.title}</h6>
                      <h6 className="text-title text-capitalize">
                        amount : {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h5 className="text-capitalize text-main">
              cart total : ₹{cartTotal}
            </h5>
            <div className="text-center my-5">
              <Link to="/cart" className="main-link">
                cart page
              </Link>
            </div>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 2.5px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  @media (min-width: 360px) {
    width: 17rem;
  }
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
  }
`;
