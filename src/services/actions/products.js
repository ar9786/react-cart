import axios from 'axios';
import {PRODUCT_LISTING,LIST_SUCCESS,LIST_FAILURE}  from '../constants'

export const productsList =()=>{
    return {
        type: PRODUCT_LISTING
    }
}


export const listSuccess =(data)=>{
    return {
        data: data,
        type: LIST_SUCCESS
    }
}


export const listFailure =(data)=>{
    return {
        data: data,
        type: LIST_FAILURE
    }
}

export const productRecord = () => {

    return dispatch => {

            dispatch(productsList());

            axios.get('https://fakestoreapi.com/products?limit=5')
            .then(response => {
                dispatch(listSuccess(response.data));
            })
            .catch(error => {
                dispatch(listFailure(error)); 
            })
    }
}