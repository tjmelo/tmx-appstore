import axios from "axios";

const products = axios.create({
  baseURL: "http://localhost:3001/products",
  timeout: 1000,
});

export const urlProducts: string = `http://localhost:3001/products`;
export const urlUser: string = `http://localhost:3001/user`;

const getProducts = products.get('');
const getShoes = products.get(`?type=Shoes`);
const getSocks = products.get(`?type=Sock`);

export { getProducts, getShoes, getSocks };
