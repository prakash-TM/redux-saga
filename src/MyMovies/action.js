export const GET_MOVIES_LIST = "GET_MOVIES_LIST";
export const GET_MOVIES_LIST_SUCCESS = "GET_MOVIES_LIST_SUCCESS";
export const GET_MOVIES_LIST_FAILED = "GET_MOVIES_LIST_FAILED";

export const getMoviesAction = (params) => {
    return { type: GET_MOVIES_LIST, params };
};

export const getMoviesSuccessAction = (results) => {
    return { type: GET_MOVIES_LIST_SUCCESS, results };
};

export const getMovieFailedAction = (err) => {
    return { type: GET_MOVIES_LIST_FAILED, err };
};