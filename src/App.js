import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FaAmazon } from "react-icons/fa";
// import styled from "styled-components";

/*  Import Pages  */
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/Default";

/*   Import Components  */
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

export class App extends Component {
  render() {
    return (
      <>
        {/* navbar,sidebar,cart,footer */}
        <Navbar />
        <Sidebar />
        <SideCart />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" exact component={SingleProduct} />
          <Route path="/cart" exact component={Cart} />
          <Route component={Default} />
          <Home />
          <Cart />
          <Contact />
          <SingleProduct />
          <Default />
          <Products />
          <About />
        </Switch>
        <Footer />
      </>
    );
  }
}
// const color = "red";
// const Button = styled.button`
//   color: white;
//   font-size: ${props => (props.large ? "3rem" : "1rem")};
//   background: ${color};
// `;
export default App;
