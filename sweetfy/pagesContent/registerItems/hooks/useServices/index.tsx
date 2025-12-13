import {
  epDeleteService,
  epDeleteManyServices,
  epGetServices,
  epPostService,
  epUpdateService,
  epUpdateServicesPrices,
} from '@/api/register/registerItem';
import { IBulkUpdatePrices, IServiceRequest } from '@/api/register/types';
import { useState } from 'react';

const UseServices = () => {
  const [loading, setLoading] = useState(false);

  const isLoading = () => setLoading(true);
  const finishLoading = () => setLoading(false);

  const getServices = async () => {
    try {
      isLoading();
      return await epGetServices();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const postService = async (request: IServiceRequest) => {
    try {
      isLoading();
      await epPostService(request);
      getServices();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const updateService = async (id: number, request: IServiceRequest) => {
    try {
      isLoading();
      await epUpdateService(id, request);
      getServices();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const updateServicesPrices = async (request: IBulkUpdatePrices[]) => {
    try {
      isLoading();
      await epUpdateServicesPrices(request);
      getServices();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const deleteService = async (id: number) => {
    try {
      isLoading();
      await epDeleteService(id);
      getServices();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };

  const deleteManyServices = async (ids: number[]) => {
    try {
      isLoading();
      await epDeleteManyServices(ids);
      getServices();
    } catch (e) {
      console.error(e);
    } finally {
      finishLoading();
    }
  };
  return {
    loading,
    getServices,
    postService,
    updateService,
    updateServicesPrices,
    deleteService,
    deleteManyServices,
  };
};

export default UseServices;
