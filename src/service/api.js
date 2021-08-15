import axios from "axios";

export const urlProducts = `http://localhost:3001/products`;
export const urlUser = `http://localhost:3001/user`;

export const urlShoes = `http://localhost:3001/products?type=Tênis`;
export const urlSocks = `http://localhost:3001/products?type=Meia`;

export const getProducts = () => axios.get(urlProducts);
