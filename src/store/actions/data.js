import apiErrorHandler from "../../services/apiErrorHandler";
import { apiGet } from "../api";
import { GET_DATA_FAILED, GET_DATA_LOADING, GET_DATA_SUCCESS } from "../constants"

export const getDataAction = () => (dispatch) => {
	dispatch({type: GET_DATA_LOADING});
	apiGet("/books")
		.then((response) => {
			dispatch({type: GET_DATA_SUCCESS, data: response.data})
		})
		.catch(error => {
			dispatch({type: GET_DATA_FAILED, error: apiErrorHandler(error)});
		})
}