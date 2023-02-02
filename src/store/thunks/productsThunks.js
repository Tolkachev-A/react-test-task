import { fetchProduct, fetchProducts, fetchSizes } from "services";
import { setLoading, setProduct, setProducts, setSize } from "store/actions";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetchProducts();

    dispatch(setProducts(res));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetchProduct(id);
    const response = await fetchSizes();

    dispatch(setProduct(res));
    dispatch(setSize(response));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setLoading(false));
  }
};
