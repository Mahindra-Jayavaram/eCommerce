import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { mensReducer } from "./Mens/reducer";
import { cartReducer } from "./CartPage/reducer";
import { getSortReducer } from "./Sort/reducer";
 

export const rootReducer=combineReducers({
    products:mensReducer,
    cart:cartReducer,
    mensData:getSortReducer
  
});

export const store =createStore(rootReducer, applyMiddleware(thunk))