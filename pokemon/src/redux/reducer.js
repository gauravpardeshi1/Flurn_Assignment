import { GET_DATA_FAILURE,GET_DATA_SUCCESS,GET_DATA_REQUEST, SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "./actiontypes"
const initstate={
    isLoading:false,
    searchloading:false,
    searchdata:null,
    searcherror:false,

    isError:false,
    data:[],
    
  
}

export const reducer=(state=initstate,{type,payload})=>{
    switch(type){
    
        case GET_DATA_REQUEST: return {...state,isLoading:true}
        case GET_DATA_SUCCESS : return {...state,isLoading:false, data:payload}
        case GET_DATA_FAILURE: return {...state,isLoading:false,isError:true}
        case SEARCH_REQUEST: return {...state, searchloading:true,searcherror:false}
        case SEARCH_SUCCESS : return {...state, searchloading:false,searcherror:false,searchdata:payload}
        case SEARCH_FAILURE: return {...state, searchloading:false,searcherror:true}
        default: return state
    }
}
