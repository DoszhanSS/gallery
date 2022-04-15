import axios from "axios";


const acsestoken = 'a8RMmvluOdfGIndH55L9AA16o88Fm0hwbG8sYf9e1I4';
export const axiosInstans = axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: `Bearer ${acsestoken}`
	}
})
