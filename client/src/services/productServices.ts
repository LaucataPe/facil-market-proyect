import axios, { AxiosHeaders } from "axios";
//import { FormCreateProduct } from "../utils/interfaces";
const URL_HOST = import.meta.env.VITE_HOST;
//const URL_API = import.meta.env.VITE_API;

export const getProductsByName = async (name: string) => {
	try {
		const { data } = await axios(`${URL_HOST}/product/search?name=${name}`);
		if (data.length === 0) {
			window.alert("Producto no encontrado");
			return;
		}
		return data;
	} catch (error: any) {
		const errorMessage = error.response
			? error.response.data.error
			: error.message;
		alert(errorMessage);
	}
};

//? Get Product By ID
export const getProductsById = async (id: number) => {
	try {
		const response = await axios(`${URL_HOST}/product/${id}`);
		return response.data;
	} catch (error: any) {
		const errorMessage = error.response
			? error.response.data.error
			: error.message;
		alert(errorMessage);
	}
};

//? Create product
export const postProduct = async (
	data: any,
	headers: Partial<AxiosHeaders["headers"]>
) => {
	try {
		const response = await axios.post(`${URL_HOST}/product`, data, { headers });
		console.log(response.data);
		return response.data;
	} catch (error: any) {
		console.error(error.message);
	}
};

//? Obtener todos los productos
export const getAllProducts = async () => {
	try {
		const { data } = await axios(`${URL_HOST}/product`);
		return data;
	} catch (error: any) {
		const errorMessage = error.response
			? error.response.data.error
			: error.message;
		alert(errorMessage);
	}
};
