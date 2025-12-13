import {
  epDeleteIngredient,
  epDeleteManyIngredients,
  epGetIngredients,
  epPostIngredient,
  epUpdateIngredient,
  epUpdateIngredientsPrices,
} from '@/api/register/registerItem';
import { IBulkUpdatePrices, IIngredientsRequest } from '@/api/register/types';
import { useState } from 'react';

const UseIngredients = () => {
  const [loading, setLoading] = useState(false);

  const isLoading = () => setLoading(true);
  const finishLoading = () => setLoading(false);

  const getIngredients = async () => {
    try {
      isLoading();
      return await epGetIngredients();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const postIngredient = async (request: IIngredientsRequest) => {
    try {
      isLoading();
      await epPostIngredient(request);
      getIngredients();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const updateIngredient = async (id: number, request: IIngredientsRequest) => {
    try {
      isLoading();
      await epUpdateIngredient(id, request);
      getIngredients();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const updateIngredientsPrices = async (request: IBulkUpdatePrices[]) => {
    try {
      isLoading();
      await epUpdateIngredientsPrices(request);
      getIngredients();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const deleteIngredient = async (id: number) => {
    try {
      isLoading();
      await epDeleteIngredient(id);
      getIngredients();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const deleteManyIngredients = async (ids: number[]) => {
    try {
      isLoading();
      await epDeleteManyIngredients(ids);
      getIngredients();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };
  return {
    loading,
    getIngredients,
    postIngredient,
    updateIngredient,
    updateIngredientsPrices,
    deleteIngredient,
    deleteManyIngredients,
  };
};

export default UseIngredients;
