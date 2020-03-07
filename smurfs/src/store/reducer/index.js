import { FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS } from "../actions";

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
}



export const reducer = ( state = initialState, action) => {
    switch(action.type){
        case FETCHING_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case FETCHING_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                error: "",
                isFetching: false
            }
        default:
            return state;
    }
}
