// import logo from './logo.svg';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Home from './ComposentsFonctionelle/Home';
import Contact from './ComposentsFonctionelle/Contact';
import Accueil from './ComposentsFonctionelle/Accueil';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NotFound from './ComposentsFonctionelle/NotFound';
import { Suspense } from 'react';

import PersonList from './Components/PersonList';
// const option = (
//     <ol>
//         <li>TWIN</li>
//         <li>BI</li>
//         <li>SAE</li>
//     </ol>
// )
// let x = "Bonjour"
// var y = "tout"
// const z = "le monde"
// const expression = <p>  1  +  1  =  {1 + 1}  </p>
// var nom = "Arij"
// var prenom = "hajji"
// var photo = <img src="logo192.png"></img>
// const user = {
//     username: "test",
//     lastname: "test"
// }

// function formatName(user) {
//     return user.lastname + "--- " + user.lastname
// }
// var myStyle = {
//     fontsize: 100,
//     color: 'red'
// }
const AddProduct = React.lazy(() => import('./ComposentsFonctionelle/AddProduct'))
const ProductsFunc = React.lazy(() => import('./ComposentsFonctionelle/ProductsFunc'))
const ProductDetails = React.lazy(() => import('./ComposentsFonctionelle/ProductDetails'))
const UpdateProduct = React.lazy(()=>import('./ComposentsFonctionelle/UpdateProduct'))
function App() {
    return (
        <div className="App">
            {/* <ComposantClass />
      <ComposantFunct />
      <Product1 />
      <Personne/>
      <Personne nom="test" prenom="ceci est un test" />
      <Composantcycle /> */}

            {/* <h1 style={myStyle}>Code CSS</h1>
      {formatName(user)}
       Ceci un objet
      {user.lastname} - {user.lastname}
      Hello 4TWIN8
      {option}
      la valeur de x est {x}
      la valeur de y est {y}
      la valeur de z est {z}
      la contenu de l'expression est {expression}
      <br>
      </br>

      Hello {nom} {prenom} {photo} */}

            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand >My Store</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/products" style={({ isActive }) => ({ textDecoration: isActive && 'underline' })}>Products</Nav.Link>
                        <Nav.Link as={NavLink} to="/products/add"
                            style={({ isActive }) => ({ textDecoration: isActive && 'underline' })}>Add
                            Product</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>



            {/* <li><Link to="/Accueil/:id">Acceuil</Link></li> */}
            {/*       
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>{""}
                <li><NavLink to="/Products">Products</NavLink></li>
            </ul>  */}
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/products'>
                        <Route index element={<ProductsFunc />} />

                        <Route path='/products/:id' element={<ProductDetails />} /> </Route>

                    {/* <Route path="/Accueil/:id" reloadDocument={true} element={<Accueil />}></Route> */}
                    <Route path='/products/add' element={<AddProduct />} > </Route>

                    <Route path='/*' element={<NotFound />} > </Route>
                    <Route path='/products/update/:id' element={<UpdateProduct />}/>
                </Routes>

            </Suspense>



            {/* <PersonList /> */}

        </div>
    );
}

export default App;
