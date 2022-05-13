import { GET_MENS, MENS_LOADING, ERROR } from "./action";


const initState = {
    loading:false,
    error: false,
    mens:[],
}

export const mensReducer = (store = initState,{type,payload})=>{
    switch(type){
        case MENS_LOADING:
            return {
                ...store,
                loading:true
            }
        case GET_MENS:
            return{
                ...store,
                loading:true,
                mens:payload,
                error:false
        }
        case ERROR:
            return{
                ...store,
                loading:false,
                error : true,
            }
        default :
        return store
    }
}