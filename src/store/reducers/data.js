import stateCreator from "../../services/stateCreator";
import { FAILED, GET_DATA_FAILED, GET_DATA_LOADING, GET_DATA_SUCCESS, LOADING, SUCCESS } from "../constants";

const initialState = {
	data: [],
	getData: stateCreator()
}

const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA_SUCCESS:
			return {
				...state,
				data: action.data,
				getData: stateCreator(SUCCESS)
			}
		case GET_DATA_LOADING:
			return {
				...state,
				getData: stateCreator(LOADING)
			}	
		case GET_DATA_FAILED:
			return {
				...state,
				getData: stateCreator(FAILED, action.error)
			}	
		default:
			return state;
	}
}
export default dataReducer;
