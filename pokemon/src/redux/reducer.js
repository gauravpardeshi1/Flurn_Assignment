import { GET_DATA_FAILURE,GET_DATA_SUCCESS,GET_DATA_REQUEST } from "./actiontypes"
const initstate={
    isLoading:false,
    isError:false,
    data:[],
    
  
}

export const reducer=(state=initstate,{type,payload})=>{
    switch(type){
    
        case GET_DATA_REQUEST: return {...state,isLoading:true}
        case GET_DATA_SUCCESS : return {...state,isLoading:false, data:payload}
        case GET_DATA_FAILURE: return {...state,isLoading:false,isError:true}
        default: return state
    }
}
