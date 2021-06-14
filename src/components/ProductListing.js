import React, {useEffect,useState} from 'react';


function ProductListing(props){
    
    useEffect(() => {
        props.productsHandler();
    }, [])
    

    /**
     * Add To Cart
    */

    const [quantity,setQuantity] = useState('');

    const addToCart = (productId) => {
        
        let today = new Date().toISOString().slice(0, 10)
        let data = {userId:"5","date":today,quantity:quantity,products:[{productId:productId,quantity:quantity}]}
        props.addToCartHandler(data);
    } 
   
    
    return(
        <>
           
           {props.productsData.data ?
            <div className="container">
                <div className="row">
                {props.productsData.data.map((product,i) =>
                
                    <div className="col-md-6 cart-wrapper" key={i}>

                        <div className="img-wrapper item">
                            <img src={product.image} />
                        </div>
                        <div className="text-wrapper item">
                            <span>{product.title}</span>
                        </div>
                        <div className="price-wrapper item">
                            <span><strong>Price:</strong> ${product.price}</span>
                        </div>
                        <div className="quantity-wrapper item">
                            <span>Quantity: </span>
                            <input type="number"  id = {product.id} onChange={(e)=> 
                                setQuantity({id:e.target.value})} 
                                value={quantity.value} min={0} max={9}/>
                        </div>
                        <input type="hidden" value="34"/>
                        <div className="btn-wrapper item">
                            <button onClick={()=>addToCart(product.id )}> Add To Cart </button>
                            <button onClick={()=>props.removeToCartHandler(product.id)} className="remove-cart-button"> Remove To Cart </button>
                        </div>
                    </div>
                )}           
                </div>
            </div>
            :null}
           
        </>
    )
}

export default ProductListing;  