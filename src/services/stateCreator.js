import { FAILED, LOADING, SUCCESS } from "../store/constants"

export const stateCreator = (type, error) => {
	switch(type) {
		case SUCCESS: {
			return {
				succes: true,
				loading: false,
				failed: false,
				error: "",
			}
		}
		case LOADING: {
			return {
				succes: false,
				loading: true,
				failed: false,
				error: "",
			}
		}
		case FAILED: {
			return {
				succes: false,
				loading: false,
				failed: true,
				error,
			}
		}
		default: {
			return {
				succes: false,
				loading: false,
				failed: false,
				error: "",
			}
		}
	}
}

export default stateCreator;