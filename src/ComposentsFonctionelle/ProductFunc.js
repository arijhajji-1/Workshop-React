import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useState } from "react";
import ProductDetails from "./ProductDetails";
function ProductFunc(props) {
    const [product, setProduct] = useState(props.product);
    const [like, setLikes] = useState(props.product.like);
    const [quantity, setQuantity] = useState(props.product.quantity);
    const addLikes = () => {
        setLikes(like + 1)
    };
    const updateQuantity = () => {
        setQuantity(quantity - 1)
    };

    const styleClass = like > 5 ? "bestProduct" : "text-center"
    return (<>

        <Card className={styleClass}>
            <Card.Img variant="top" src={require("../assets/images/" + props.product.img)} />
            <Card.Body>

                <Card.Title> <Link to={`/products/${props.product.id}`}> {props.product.name}</Link></Card.Title>
                <Card.Text>{props.product.description}</Card.Text>
                <Card.Text> {props.product.price} </Card.Text>
                <Card.Text>Likes :{like}</Card.Text>
                <Card.Text>quantité :{quantity}</Card.Text>
                <Button variant="primary" onClick={addLikes}>Like</Button>{' '}
                <Button variant="primary" onClick={() => props.buyFunction(product, updateQuantity)} disabled={quantity === 0}>Buy</Button>
                <Button variant="success"><Link to={`/products/update/${product.id}`}
style={{textDecoration :'none' ,color: 'white'}}>Update Product
</Link></Button>
<Button variant="danger" onClick={() => props.deleteProd(product.id)} >Delete Product</Button>
            </Card.Body>
        </Card>

    </>);
}

export default ProductFunc;