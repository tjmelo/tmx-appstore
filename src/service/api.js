import axios from "axios";

const products = axios.create({
  baseURL: "http://localhost:3001/products",
  timeout: 1000,
});

export const urlProducts = `http://localhost:3001/products`;
export const urlUser = `http://localhost:3001/user`;

const getProducts = products.get();
const getShoes = products.get(`?type=Shoes`);
const getSocks = products.get(`?type=Sock`);

export { getProducts, getShoes, getSocks };
