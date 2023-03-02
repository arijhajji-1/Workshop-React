import { useEffect, useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Alert from 'react-bootstrap/Alert';
import products from "../products.json";
import ProductFunc from "./ProductFunc";
import { getallProducts,deleteProduct } from "../services/api";


function ProductsFunc(props) {
  const [showAlert, setShowAlert] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [products, setProducts] = useState([]);

  const buy = (product, updateQuantity) => {
    product.quantity--;
    updateQuantity(product.quantity);
    console.log(product.quantity--);
    showAlert1();

  };


  const showAlert1 = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);

  };

  //Get Products
  useEffect(() => {
    getallProducts().then(products => setProducts(products));
  }, []);


  useEffect(() => {

    console.log("componentDidMount");
    setTimeout(() => { setShowWelcome(false) }


      , 3000);
  })
  const deleteProd = async (id) => {
    const result = window.confirm("Are you sure you want to delete?");
  if (result) {
    await deleteProduct(id);
    getallProducts();
    window.location.replace('/products');
   }
  }
  
  return (<>
    {showWelcome && (
      <Alert variant="success">Welcome to our store!</Alert>
    )}
    <CardGroup>
      {products.map((p, i) => (
        <ProductFunc key={i} product={p} buyFunction={buy} deleteProd={deleteProd} />))}

    </CardGroup>
    {showAlert && (
      <Alert variant="success">You bought an Item</Alert>
    )}

  </>);
}

export default ProductsFunc;