import {PROFILE} from '../constants'

const initialState = {
    profileData: []
}


export default function getProfile(state=[], action){
    
    switch (action.type) {
       
        case PROFILE:
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }

}