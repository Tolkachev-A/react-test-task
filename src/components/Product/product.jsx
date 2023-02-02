import React, { useEffect, useMemo, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { Loading } from "components/Loading";
import { selectIsLoading, selectProduct, selectSizes } from "store/selectors";
import { getProduct } from "store/thunks";

export const Product = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const product = useSelector(selectProduct);
  const sizes = useSelector(selectSizes);
  const isLoading = useSelector(selectIsLoading);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const onColorClick = (color) => {
    setSelectedSize(null);
    setSelectedImage(0);
    setSelectedColor(color);
  };

  const activeClass = (isActive) => isActive && "active-size";

  const listColors = useMemo(() => {
    return product?.colors.map((color) => (
      <button
        className={activeClass(color === selectedColor)}
        key={color.id}
        onClick={() => onColorClick(color)}
      >
        {color.name}
      </button>
    ));
  }, [product?.colors, selectedColor]);

  const images = useMemo(() => {
    return selectedColor?.images.map((image, index) => (
      <img
        key={image}
        src={image}
        alt={selectedColor.name}
        onClick={() => setSelectedImage(index)}
        width={200}
        height={200}
        style={{ display: selectedImage === index ? "block" : "none" }}
      />
    ));
  }, [selectedColor?.images, selectedColor?.name, selectedImage]);

  const listSize = useMemo(() => {
    return sizes?.map((size) => (
      <button
        key={size.id}
        onClick={() => setSelectedSize(size.id)}
        disabled={!selectedColor?.sizes.includes(size.id)}
        className={activeClass(size.id === selectedSize)}
      >
        {size.label}
      </button>
    ));
  }, [selectedColor?.sizes, selectedSize, sizes]);

  const selectSize = useMemo(() => {
    return selectedSize
      ? `Выбранный размер: ${
          sizes.find((size) => size.id === selectedSize).label
        }`
      : " Выберете размер";
  }, [selectedSize, sizes]);

  useEffect(() => {
    setSelectedColor(product?.colors[0]);
  }, [product]);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={"card"}>
      <h2>{product?.name}</h2>
      <div className={"card__btn-list"}>{listColors}</div>
      <div className={"card__img"}>
        <button
          className={"card__next-prev-btn"}
          disabled={selectedImage === 0}
          onClick={() => setSelectedImage(selectedImage - 1)}
        >
          prev
        </button>
        {images}
        <button
          className={"card__next-prev-btn"}
          disabled={selectedImage === selectedColor?.images.length - 1}
          onClick={() => setSelectedImage(selectedImage + 1)}
        >
          next
        </button>
      </div>
      <div className={"card__btn-list"}>{listSize}</div>
      <p>{selectSize}</p>
      <p>{selectedColor?.description}</p>
    </div>
  );
};
