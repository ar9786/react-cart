import {combineReducers} from 'redux'
import cartItems from './reducer'
import doLogin from './doLogin'

export default combineReducers({
    cartItems,doLogin
})