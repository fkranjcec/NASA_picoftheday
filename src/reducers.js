import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from "./actions";

export function nasaDataReducer(
    state = {
        error: false,
        nasaData: null,
    },
    action
) {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return { error: false, nasaData: action.payload};
        case FETCH_DATA_ERROR:
            return { error: true };
        default:
            return state;
    }
}
