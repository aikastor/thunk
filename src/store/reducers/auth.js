import stateCreator from "../../services/stateCreator";
import { FAILED, GET_PROFILE_FAILED, GET_PROFILE_LOADING, GET_PROFILE_SUCCESS, LOADING, LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_FAILED, SIGNUP_LOADING, SIGNUP_SUCCESS, SUCCESS } from "../constants";

const initialState = {
	profile: null,
	getProfile: stateCreator(),
	login: stateCreator(),
	signUp: stateCreator()
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				profile: action.profile,
				login: stateCreator(SUCCESS)
			}
		case LOGIN_LOADING:
			return {
				...state,
				login: stateCreator(LOADING)
			}	
		case LOGIN_FAILED:
			return {
				...state,
				login: stateCreator(FAILED, action.error)
			}
		case GET_PROFILE_SUCCESS:
			return {
				...state,
				profile: action.profile,
				getProfile: stateCreator(SUCCESS)
			}
		case GET_PROFILE_LOADING:
			return {
				...state,
				getProfile: stateCreator(LOADING)
			}	
		case GET_PROFILE_FAILED:
			return {
				...state,
				getProfile: stateCreator(FAILED, action.error)
			}	
		case SIGNUP_SUCCESS:
			return {
				...state,
				profile: action.profile,
				getProfile: stateCreator(SUCCESS)
			}
		case SIGNUP_LOADING:
			return {
				...state,
				getProfile: stateCreator(LOADING)
			}	
		case SIGNUP_FAILED:
			return {
				...state,
				getProfile: stateCreator(FAILED, action.error)
			}
		default:
			return state;
	}
}
export default authReducer;