import {CART_ITEMS} from '../type'

const initialState = {
    items:[],
}

export default function(state = initialState, action){

    switch(action.type){

        case CART_ITEMS:
        return {
            items:action.payload,
        }
        default: return state
    }

}