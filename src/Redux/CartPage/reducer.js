import { ADD_TO_CART, REMOVE_ITEM, FAVORITES } from "./action";

const initState = {
    cart:[],
    wishlist :[],
}

export const cartReducer = (store = initState, {type, payload})=>{
    switch(type){

        case ADD_TO_CART:
            return {
                ...store,
                cart:[...store.cart,payload]
            }
        case REMOVE_ITEM:
            const newStore = store.cart.filter((el)=> el.id !== payload)
            return {
                ...store,
                cart: newStore
            }
        case FAVORITES:
            return {
                ...store,
                cart:[...store,payload]
            }
        default:
            return store;
    }
}