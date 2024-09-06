export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export function fetchNasaData() {
    return async (dispatch) => {
        try {
            const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
            const nasaData = await response.json();
            dispatch({ type: FETCH_DATA_SUCCESS, payload: nasaData });
        } catch (error) {
            dispatch({ type: FETCH_DATA_ERROR });
        }
    };
}
