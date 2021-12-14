import { takeLatest } from "@redux-saga/core/effects";
import { GetRequest } from "../../utilities/Network";
import { API_KEY, BASE_URL } from "../../utilities/Network/config";
import {
    getMovieFailedAction,
    GET_MOVIES_LIST,
    getMoviesSuccessAction,
} from "./action";

function* getMovies(action) {
    try {
        // Prepare query
        const { page, search } = action.params;
        const URL = `${BASE_URL}?page=${page}&s=${search}&apikey${API_KEY}`;

        // Dispatch API request
        const apiResponse = await GetRequest(URL);

        // Handle validation of response
        if (!apiResponse || Object.keys(apiResponse).length === 0) {
            yield put(getMovieFailedAction(apiResponse));
            return;
        }

        // Format the data
        const { Search, totalResults } = apiResponse;
        const response = {
            movies: Search,
            totalRecords: totalResults,
        };

        yield put(getMoviesSuccessAction(response));
        return;

        // Prepare Query
        // Dispatch API Request
        // Validate API response
        // If false, dispatch fallback
        // Else, format the response & return success
    } catch (err) {
        yield put(getMovieFailedAction());
    }
}

function* watchMyMovies() {
    yield takeLatest(GET_MOVIES_LIST, getMovies);
}

export default watchMyMovies;