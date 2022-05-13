export const GET_MENS = "GET_MENS";
export const MENS_LOADING = "MENS_LOADING";
export const ERROR = "ERROR";


export const getMens = (payload) =>({
    type : GET_MENS,
    payload
})
export const mensLoading = () =>({
    type : MENS_LOADING,
})
export const error = () =>({
    type : ERROR,
})


export const getMensData = ()=>(dispatch) =>{
    dispatch(mensLoading());
    fetch("http://localhost:1343/Data").then((res)=> res.json())
    .then((res)=>dispatch(getMens(res)))
    .catch(()=>dispatch(error()))
}