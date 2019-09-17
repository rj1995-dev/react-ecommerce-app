import React from "react";
import CartSection from "../components/CartPage";
import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg";
export default function CartPage(props) {
  // console.log(props);

  return (
    <>
      <Hero img={cartBcg} />
      <CartSection history={props.history} />
    </>
  );
}
