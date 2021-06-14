import {SUCCESS, REMOVE_TO_CART,ADD_TO_CART_SUCESS} from '../constants'

const initialState = {
    cartData: [],
    loading:false,
    error:''
}
export default function cartItems(state=initialState, action) {
   // action.data ? console.log("action length ",action.data) : console.log("nothing");
    switch (action.type) {
        case SUCCESS:
            return {
                ...state,
                cartData: [...state.cartData,...action.data],
            }
        case ADD_TO_CART_SUCESS:
            return {
                ...state,
                cartData: [...state.cartData,action.data],
            }
        case REMOVE_TO_CART:
            //console.log("before remove action data",action.data);
            //console.log("before remove cart data",state.cartData);
            state.cartData.forEach((e,key) => { if(action.data.id === e.id ) { state.cartData.splice(key,1)
             } });
            //console.log("after remove cart data ",state.cartData);
            return {
                ...state,
                cartData: [...state.cartData],
            }
        default:
            return state
    }

}
