import { FILTER_DATA, GET_DATA } from "./action";

const initState={
  mensData: [],
  filterMensData :[]
};

export const getSortReducer = (store = initState, { type, payload }) => {
  // console.log(payload)
  switch (type) {
    case GET_DATA:
      return {
        ...store,
        mensData: payload,
        filteMensData:payload
      };
    case FILTER_DATA :
      return {...store,filterMensData:[...filterData(store.mensData,payload)]}   
    default:
        return store
  }
};

let filterData =(data,value)=>{

 let newData = data.filter((e)=> e.selectVerify === value )

 return newData
}