import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { items } from "./productData";
const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartItems: 10,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: 0,
    filterdProducts: [],
    featuredProducts: [],
    singleProducts: {},
    loading: false
  };
  componentDidMount() {
    //from contentful items
    this.setProducts(items);
  }

  //set products
  setProducts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    // console.log(storeProducts);
    // feature products
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    this.setState({
      storeProducts,
      filterdProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProducts: this.getStorageProduct(),
      loading: false
    });
  };
  //get Cart From local storage
  getStorageCart = () => {
    return [];
  };

  //get Product from local storage
  getStorageProduct = () => {
    return {};
  };
  //get totals
  getTotals = () => {};
  //add totals
  addTotals = () => {};
  //sync storage
  syncStorage = () => {};
  //add to cart
  addToCart = id => {
    console.log(`add to cart${id}`);
  };
  //set single product
  setSingleProduct = id => {
    console.log(`set single product ${id}`);
  };

  //Handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  //Handle Cart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.sidebarOpen });
  };
  //close cart
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  //open cart
  openCart = () => {
    this.setState({ cartOpen: true });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
