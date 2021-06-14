
import {connect} from 'react-redux'
import Header from '../components/Header';
import {getCartItems} from '../services/actions/cart'


const mapStateToProps=state=>({
    cartData:state.cartItems.cartData
})
const mapDispatchToProps=dispatch=>({
    getToCartHandler: data=>dispatch(getCartItems(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)