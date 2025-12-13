import {
  epDeleteProduct,
  epGetProducts,
  epPostProduct,
  epUpdateProduct,
} from '@/api/register/registerItem';
import { IProductRequest } from '@/api/register/types';
import { useState } from 'react';

const UseProducts = () => {
  const [loading, setLoading] = useState(false);

  const isLoading = () => setLoading(true);
  const finishLoading = () => setLoading(false);

  const getProducts = async () => {
    try {
      isLoading();
      return await epGetProducts();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const postProduct = async (request: IProductRequest) => {
    try {
      isLoading();
      await epPostProduct(request);
      getProducts();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const updateProduct = async (id: number, request: IProductRequest) => {
    try {
      isLoading();
      await epUpdateProduct(id, request);
      getProducts();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const deleteProduct = async (id: number, request: IProductRequest) => {
    try {
      isLoading();
      await epDeleteProduct(id);
      getProducts();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  return { loading, getProducts, postProduct, updateProduct, deleteProduct };
};

export default UseProducts;
