import { ProductsActionsType } from "../../constants";

const initState = {
  products: null,
  product: null,
  sizes: null,
};

export const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case ProductsActionsType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ProductsActionsType.SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case ProductsActionsType.SET_SIZES:
      return {
        ...state,
        sizes: action.payload,
      };
    default:
      return state;
  }
};
