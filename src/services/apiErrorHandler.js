const apiErrorHandler = (error) => {
	if(error.response) return error.response.data
	if(error.message) return error.message
	return "Unknown error";
}

export default apiErrorHandler;