import {LOGIN} from '../constants'

const initialState = {
    loginData: []
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