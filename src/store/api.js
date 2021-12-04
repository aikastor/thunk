import axios from "axios";
import qs from "query-string";

const API_URL = 'localhost:1717';
const AUTH_HEADER = 'X-Auth';

export const createUrl = (route, prms = null) => {
	const params = prms ? `?${qs.stringify(prms)}`: '';
	return decodeURIComponent(`${API_URL}${route}${params}`);
}

export const auhtHeader = () => ({
	[AUTH_HEADER]: localStorage.getItem("token")
})

export const apiGet = (route, options = {}) => {
	const {params, headers = {}, secure = false} = options;
	const url = createUrl(route, params);

	if(secure) Object.assign(headers, auhtHeader());

	return axios({
		method: "GET",
		url,
		headers
	})
}

export const apiPost = (route, options = {}) => {
	const {params, headers = {}, secure = false, data} = options;
	const url = createUrl(route, params);

	if(secure) Object.assign(headers, auhtHeader());

	return axios({
		method: "POST",
		url,
		headers,
		data
	})
}

export const apiPut = (route, options = {}) => {
	const {params, headers = {}, secure = false, data} = options;
	const url = createUrl(route, params);

	if(secure) Object.assign(headers, auhtHeader());

	return axios({
		method: "PUT",
		url,
		headers, 
		data
	})
}

export const apiDelete = (route, options = {}) => {
	const {params, headers = {}, secure = false, data} = options;
	const url = createUrl(route, params);

	if(secure) Object.assign(headers, auhtHeader());

	return axios({
		method: "DELETE",
		url,
		headers,
		data
	})
}