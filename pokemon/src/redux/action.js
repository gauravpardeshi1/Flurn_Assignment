import axios from "axios"
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./actiontypes"

export const getdata=(page)=>(dispatch)=>{
    dispatch({type:GET_DATA_REQUEST})
try {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`)
    .then((res)=>dispatch({type:GET_DATA_SUCCESS,payload:res.data.results}))
} catch (error) {
    dispatch({type:GET_DATA_FAILURE})
}
}

export const singledata=(name)=>(dispatch)=>{
    dispatch({type:GET_DATA_REQUEST})
try {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res)=>dispatch({type:GET_DATA_SUCCESS,payload:res.data}))
} catch (error) {
    dispatch({type:GET_DATA_FAILURE})
}
}


export const searchdata=(name)=>(dispatch)=>{
    dispatch({type:SEARCH_REQUEST})
try {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res)=>dispatch({type:SEARCH_SUCCESS,payload:res.data}))
    .catch((err)=>  dispatch({type:SEARCH_FAILURE}))
} catch (error) {
    dispatch({type:SEARCH_FAILURE})
}
}