import {connect} from 'react-redux'
import ProductListing from '../components/ProductListing';
import {productRecord} from '../services/actions/products';
import {addToCart,removeToCart} from '../services/actions/cart';

const mapStateToProps=state=>({
    productsData:state.productListingReducer
})

const mapDispatchToProps=dispatch=>({
    productsHandler:() => dispatch(productRecord()),
    addToCartHandler: data=>dispatch(addToCart(data)),
    removeToCartHandler: data=>dispatch(removeToCart(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(ProductListing)