
import {connect} from 'react-redux'
import Home from '../components/Home';
import {addToCart,removeToCart} from '../services/actions/action'


const mapStateToProps=state=>({
    cartData:state.cartItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler: data=>dispatch(addToCart(data)),
    removeToCartHandler: data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
//export default Home;