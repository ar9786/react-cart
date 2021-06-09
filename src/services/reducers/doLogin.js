import {LOGIN} from '../constants'

const initialState = {
    cartData: []
}


export default function doLogin(state=[], action){
    switch (action.type) {
        case LOGIN:
            return [
                ...state,
                {loginData: action.data}
            ]
        default:
            return state
    }

}