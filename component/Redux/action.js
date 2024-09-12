import { ADD_TO_CART,REMOVE_FROM_CART,USER_LIST,SET_USER_DATA } from './constants';

export function addToCart(item) {
    //console.warn(item)
    return {
        type: ADD_TO_CART,
        data: item
    }
}
export function removeFromCart(item) {
    //console.warn(item)
    return {
        type: REMOVE_FROM_CART,
        data: item
    }
}
export function getUserList() {
    //console.warn(item)
    return {
        type: USER_LIST
    }
}