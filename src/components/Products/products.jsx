import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Loading } from "components/Loading";
import { selectIsLoading, selectProducts } from "store/selectors";
import { getProducts } from "store/thunks";

export const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);

  const listProducts = products?.map((product) => (
    <NavLink to={`/${product.id}`} className={"images-list"} key={product.id}>
      <img
        src={product.colors[0].images[0]}
        alt={product.name}
        width={200}
        height={200}
      />
    </NavLink>
  ));

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return <div>{listProducts}</div>;
};
