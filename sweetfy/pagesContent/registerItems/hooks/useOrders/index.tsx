import {
  epDeleteOrder,
  epGetOrders,
  epPostOrder,
  epUpdateOrder,
} from '@/api/register/registerItem';
import { IOrderRequest } from '@/api/register/types';
import { useState } from 'react';

const UseOrders = () => {
  const [loading, setLoading] = useState(false);

  const isLoading = () => setLoading(true);
  const finishLoading = () => setLoading(false);

  const getOrders = async () => {
    try {
      isLoading();
      return await epGetOrders();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const postOrder = async (request: IOrderRequest) => {
    try {
      isLoading();
      await epPostOrder(request);
      getOrders();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const updateOrder = async (id: number, request: IOrderRequest) => {
    try {
      isLoading();
      await epUpdateOrder(id, request);
      getOrders();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const deleteOrder = async (id: number, request: IOrderRequest) => {
    try {
      isLoading();
      await epDeleteOrder(id);
      getOrders();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  return { loading, getOrders, postOrder, updateOrder, deleteOrder };
};

export default UseOrders;
