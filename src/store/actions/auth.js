import apiErrorHandler from "../../services/apiErrorHandler"
import { apiGet, apiPost } from "../api"
import { GET_PROFILE_FAILED, GET_PROFILE_LOADING, GET_PROFILE_SUCCESS, LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS, SIGNUP_FAILED, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../constants"

export const loginAction = data => (dispatch) => {
	dispatch({type: LOGIN_LOADING})
	apiPost("/login", {data})
		.then((response) => {
			localStorage.setItem('token', response.data.token);
			dispatch({type: LOGIN_SUCCESS, profile: response.data.data})
		})
		.catch(error => {
			dispatch({type:LOGIN_FAILED, error: apiErrorHandler(error)});
		})
}

export const signupAction = data => (dispatch) => {
	dispatch({type: SIGNUP_LOADING})
	apiPost("/signup", {data})
		.then((response) => {
			localStorage.setItem('token', response.data.token);
			dispatch({type: SIGNUP_SUCCESS, profile: response.data.data})
		})
		.catch(error => {
			dispatch({type:SIGNUP_FAILED, error: apiErrorHandler(error)});
		})
}

export const getProfileAction = () => (dispatch) => {
	dispatch({type: GET_PROFILE_LOADING})
	apiGet("/me")
		.then((response) => {
			dispatch({type: GET_PROFILE_SUCCESS, profile: response.data})
		})
		.catch(error => {
			dispatch({type: GET_PROFILE_FAILED, error: apiErrorHandler(error)});
		})
}