import {REMOVE_TO_CART,SUCCESS,FAILURE,ADD_TO_CART_SUCESS}  from '../constants'
import axios from 'axios';



export const removeToCartSucess =(data)=>{
    return {
        data: data,
        type: REMOVE_TO_CART
    }
}

export const Success =(data)=>{
    return {
        data: data,
        type: SUCCESS
    }
}

export const addToCartSuceess =(data)=>{
    return {
        data: data,
        type: ADD_TO_CART_SUCESS
    }
}

export const Failure =(data)=>{
    return {
        data: data,
        type: FAILURE
    }
}

export const addToCart = (data) => {

    return dispatch => {
            
            axios.post('https://fakestoreapi.com/carts',data)
            .then(response => {
                dispatch(addToCartSuceess(response.data));
            })
            .catch(error => {
                dispatch(Failure(error)); 
            })
    }
}

export const getCartItems = () => {

    return dispatch => {
            
        axios.get('https://fakestoreapi.com/carts/user/1').then(response => {
            dispatch(Success(response.data));
        }).catch(error => {
            dispatch(Failure(error));
        })
    }
}


export const removeToCart = (id) => {
    return dispatch => {

        axios.delete('https://fakestoreapi.com/carts/'+id).then(response => {
            dispatch(removeToCartSucess(response.data));
            
        }).catch(error => {
            console.log("remove error ",error)
            dispatch(Failure(error));
        })
    }
}