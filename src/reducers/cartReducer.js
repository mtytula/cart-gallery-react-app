import {DELETE_CART, FETCH_ALL, UPDATE_CART} from "../actions/cartActions";

const initialState = {
    carts: [],
    currentCart: {}
}
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CART:
            return {
                ...state,
                currentCart: {...state.currentCart, ...action.payload}
            }
        case DELETE_CART:
            return {
                ...state,
                carts: state.carts.filter(cart => cart.id !== action.payload)
            }
        case FETCH_ALL:
            return {
                ...state,
                carts: action.payload
            }
        default:
            return state;
    }
}