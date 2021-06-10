import {combineReducers} from 'redux'
import cartItems from './reducer'
import doLogin from './doLogin'
import getProfile from './profile'

export default combineReducers({
    cartItems,doLogin,getProfile
})