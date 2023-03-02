import Card from "react-bootstrap/Card";
import { Component } from "react";
import Button from 'react-bootstrap/Button';
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { product: props.product};
  }

  addLikes = () => {
    this.setState((prevState) => ({
      product: { ...prevState.product,
                 like: prevState.product.like + 1 },
    }));
  };
  updateQuantity = (newQuantity) => {
    this.setState((prevState) => ({
      product: { ...prevState.product,
                 quantity: newQuantity },
    }));
  };
  render() { 
    return (<>
        <Card>
              <Card.Img variant="top" src={require("../assets/images/" + this.state.product.img)} />
              <Card.Body>
                <Card.Title> {this.state.product.name}</Card.Title>
                <Card.Text>{this.state.product.description}</Card.Text>
                <Card.Text> {this.state.product.price} </Card.Text>
                <Card.Text>Likes :{this.state.product.like}</Card.Text>
                <Card.Text>quantité :{this.state.product.quantity}</Card.Text>
                <Button variant="primary" onClick={this.addLikes}>Like</Button>{' '}
                <Button variant="primary" onClick={()=>this.props.buyFunction(this.state.product,this.updateQuantity)} disabled={this.state.product.quantity===0}>Buy</Button>
              </Card.Body>
      </Card>
    </>);
  }
} 
export default Product;