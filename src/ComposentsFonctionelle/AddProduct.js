import react, { useState } from "react";
import { newProduct } from "../services/api";
import { Form, Button } from "react-bootstrap";
import { useNavigate,Link } from "react-router-dom";

const AddProduct = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState("product1.webp");
    const [like, setLike] = useState('0');
    const [quantity, setQuantity] = useState('20');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const product = {
            id,
            name,
            price,
            img,
            like,
            quantity,
            description
        };
        newProduct(product).then(data => {
            console.log(data);
            // window.location.replace(&#39;/products&#39;);
            navigate("/products/");
        });
    };
    return (
        <div className="container">
            <h2>Add product </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) =>
                        setName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="text" value={description} onChange={(e) =>
                        setDescription(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label>Price: </Form.Label>
                    <Form.Control type="number" value={price} onChange={(e) =>
                        setPrice(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Product
                </Button>
                
            </Form>
        </div>
    );
};
export default AddProduct;