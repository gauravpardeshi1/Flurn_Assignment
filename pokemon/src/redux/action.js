import axios from "axios"
import { BOOKMARK_DATA, FETCH_DATA, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./actiontypes"



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

export const PostData=(data)=>(dispatch)=>{
    return axios.post(`https://nice-tan-octopus-toga.cyclic.app/bookmark`,data)
}

export const BookmarkData=(dispatch)=>{
    try {
        axios.get(`https://nice-tan-octopus-toga.cyclic.app/bookmark`)
        .then((res)=>dispatch({type:BOOKMARK_DATA,payload:res.data}))
    } catch (error) {
        
    }
}


