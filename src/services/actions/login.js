import {LOGIN}  from '../constants'

export const login =(data)=>{
    return {
        data: data,
        type: LOGIN
    }
}