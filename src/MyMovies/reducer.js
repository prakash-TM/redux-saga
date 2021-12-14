import {
    GET_MOVIES_LIST,
    GET_MOVIES_LIST_FAILED,
    GET_MOVIES_LIST_SUCCESS,
} from "./action";
const initialState = {
    isFetching: false,
    response: {
        movies: null,
        totalRecords: null,
    },
};
const myMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES_LIST:
            return {...state, isFetching: true };
        case GET_MOVIES_LIST_SUCCESS:
            return {...state, isFetching: false, response: action.results };
        case GET_MOVIES_LIST_FAILED:
            return {...state };
        default:
            return {...state };
    }
};

export default myMoviesReducer;