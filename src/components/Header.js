import React, {useEffect} from 'react';
import {Navbar,Nav} from 'react-bootstrap/';
import {Link} from "react-router-dom";

function Header(props) {

    useEffect(() => {
        props.getToCartHandler();
    }, [])
    console.log("Header",props)
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#logo">Logo</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about-us">About</Link>
                    <Link className="nav-link" to="/contact-us">Contact Us</Link>
                </Nav>
                
                <div className="add-to-cart">
                {
                    props.cartData ? <span>{
                        props.cartData.length
                    }</span> : null
                }
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"/>
            </div>
            </Navbar>            
        </>
    )
}

export default Header;
