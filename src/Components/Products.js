import CardGroup from "react-bootstrap/CardGroup";
import products from "../products.json";
import { Component } from "react";
import Product from "./Product";
import Alert from 'react-bootstrap/Alert';

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      showWelcome: true
    };
  }
  buy = (product, updateQuantity) => {
    product.quantity--;
    updateQuantity(product.quantity);
    console.log(product.quantity--)
    this.showAlert();

  };


  showAlert = () => {
    this.setState({ showAlert: true }, () => {
      setTimeout(() => {
        this.setState({ showAlert: false });
      }, 2000);
    });
  };

  componentDidMount() {
    setTimeout(() => { this.setState({ showWelcome: false }) }, 3000);
  };

  
render() {
  return (
    <>
      {this.state.showWelcome && (
        <Alert variant="success">Welcome to our store!</Alert>
      )}
      <CardGroup>
        {products.map((p, i) => (
          <Product key={i} product={p} buyFunction={this.buy} />))}

      </CardGroup>
      {this.state.showAlert && (
        <Alert variant="success">You bought an Item</Alert>
      )}

    </>
  );
}
}

export default Products;
