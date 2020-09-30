const DEFAULT_API_URL = 'http://localhost:3001';

export const getCollection = () => {
    return fetch(`${DEFAULT_API_URL}/carts`)
        .then((response) => response.json())
};

export const addCart = (cart) => fetch(`${DEFAULT_API_URL}/carts`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(cart)
});

export const removeCart = (cartId) => fetch(`${DEFAULT_API_URL}/carts/${cartId}`, {
    method: 'DELETE'
});
