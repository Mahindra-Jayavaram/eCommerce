
export const ADD_TO_CART = "ADD_TO_CART";

export const REMOVE_ITEM = "REMOVE_ITEM";

export const FAVORITES = "FAVORITES";


export const additem = (payload) =>({
    type:ADD_TO_CART,
    payload
})
export const removeitem = (payload) =>({
    type:REMOVE_ITEM,
    payload
})
export const addWishList = (eachproduct) =>({
    type:FAVORITES,
    payload:eachproduct
})

