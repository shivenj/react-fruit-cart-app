import apiClient from "./index";
import { IProducts } from "../interfaces";

export const getProducts = (): Promise<IProducts[]> => {
  return apiClient
    .get("/fruit/all")
    .catch((err) => err.response)
    .then((res) => res.data);
};
