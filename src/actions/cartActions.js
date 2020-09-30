import {addCart, removeCart, getCollection} from "../services/collection";

export const UPDATE_CART            = 'UPDATE_CART';
export const DELETE_CART            = 'DELETE_CART';
export const FETCH_ALL              = 'FETCH_ALL';

export const updateCart = (cart) => ({
    type: UPDATE_CART,
    payload: cart
});

export const addCartToCollection = (cart) => (dispatch) => {
    addCart(cart).then(({status}) => {
        if (status === 201) {
            dispatch(fetchAll())
        }
    });
};

export const fetchAll = () => (dispatch) => {
    getCollection().then((payload) => dispatch({
            type: FETCH_ALL,
            payload: payload
    }));
};

export const deleteCart = (cartId) => (dispatch) => {
    removeCart(cartId).then(({status}) => {
        if (status === 200) {
            // dispatch(fetchAll())
            dispatch({
                type: DELETE_CART,
                payload: cartId
            });
        }
    });

    return {}
};