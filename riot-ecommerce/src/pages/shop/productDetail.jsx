import React, {useContext, useState, useEffect}from 'react';
import { ShopContext, ShopContextProvider } from '../../context/shop-context';
import { useParams } from 'react-router-dom';
import { Product } from './product';

export const ProductDetail = () => {
  const value = useContext(ShopContextProvider)
  const [product] = value.product;
  const params = useParams();

  return (
    <div><h1>product-detail</h1></div>
  )
}
