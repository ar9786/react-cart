import {ADD_TO_CART,REMOVE_TO_CART}  from '../constants'

export const addToCart =(data)=>{
    return {
        data: data,
        type: ADD_TO_CART
    }
} 

export const removeToCart =(data)=>{
    return {

        type: REMOVE_TO_CART
    }
}