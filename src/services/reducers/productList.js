import {PRODUCT_LISTING, LIST_SUCCESS,LIST_FAILURE} from '../constants'

const initialState = {
    data: [],
    loading:false,
    error:''
}
export default function productListingReducer(state = initialState, action) {
    
    switch (action.type) {
        case PRODUCT_LISTING:
            return {
                ...state,
                loading: true
            }
        case LIST_SUCCESS:
            
            return {
                ...state,
                data: action.data,
            
            }
        case LIST_FAILURE:
            return {
                ...state,
                error:action.data
            }
        default:
            return state
    }
}
