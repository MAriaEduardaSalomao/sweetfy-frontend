import {
  epDeleteRecipe,
  epGetRecipes,
  epPostRecipe,
  epUpdateRecipe,
} from '@/api/register/registerItem';
import { IRecipeRequest } from '@/api/register/types';
import { useState } from 'react';

const UseRecipes = () => {
  const [loading, setLoading] = useState(false);

  const isLoading = () => setLoading(true);
  const finishLoading = () => setLoading(false);

  const getRecipes = async () => {
    try {
      isLoading();
      return await epGetRecipes();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const postRecipe = async (request: IRecipeRequest) => {
    try {
      isLoading();
      await epPostRecipe(request);
      getRecipes();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const updateRecipe = async (id: number, request: IRecipeRequest) => {
    try {
      isLoading();
      await epUpdateRecipe(id, request);
      getRecipes();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const deleteRecipe = async (id: number, request: IRecipeRequest) => {
    try {
      isLoading();
      await epDeleteRecipe(id);
      getRecipes();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  return { loading, getRecipes, postRecipe, updateRecipe, deleteRecipe };
};

export default UseRecipes;
