import React from 'react';

function Home(props){
    
    return(
        <>
            <div className="add-to-cart">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"/>
            </div>
            <h1> Home Component </h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://m.media-amazon.com/images/I/71sxlhYhKWL._AC_UY218_.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: $100</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price:1000,name:'I-phone 11'})}> Add To Cart </button>
                </div>
            </div>
        </>
    )
}

export default Home;