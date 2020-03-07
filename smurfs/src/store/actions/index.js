import axios from "axios"


export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START"
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS"
export const FETCHING_SMURFS_ERROR = "FETCHING_SMURFS_ERROR"


export const getSmurfs = () => dispatch => {

    dispatch({ type: FETCHING_SMURFS_START })

    axios.get('http://localhost:3333/smurfs')
    .then( res => { 
        console.log(res)
        dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data})
    })
}