import { ProductsActionsType } from "../../constants";

export const setProducts = (payload) => ({
  type: ProductsActionsType.SET_PRODUCTS,
  payload,
});

export const setProduct = (payload) => ({
  type: ProductsActionsType.SET_PRODUCT,
  payload,
});

export const setSize = (payload) => ({
  type: ProductsActionsType.SET_SIZES,
  payload,
});
