import {combineReducers} from 'redux'
import cartItems from './cartReducer'
import doLogin from './doLogin'
import getProfile from './profile'
import productListingReducer from './productList'

export default combineReducers({
    cartItems,doLogin,getProfile,productListingReducer
})