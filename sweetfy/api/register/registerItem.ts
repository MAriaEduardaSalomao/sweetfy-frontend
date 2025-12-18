import { IBulkUpdatePrices, IIngredient, IIngredientsRequest, IOrder, IOrderRequest, IProduct, IProductRequest, IRecipe, IRecipeRequest, IService, IServiceRequest } from './types';
import api from "../pathConfiguration";

// Ingredients
export async function epPostIngredient(request: IIngredientsRequest) {
  await api.post('/ingredients', request);
}

export async function epGetIngredients():Promise<IIngredient[]>{
 const response = await api.get('/ingredients')
 const sortedResponse = response.data.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return sortedResponse;
}

export async function epDeleteIngredient(id: number){
 await api.delete(`/ingredients/${id}`);
}

export async function epDeleteManyIngredients(ids: number[]){
 await api.delete('/ingredients/bulk-delete', {data:ids});
}

export async function epUpdateIngredientsPrices(ingredients: IBulkUpdatePrices[]){
 await api.put('/ingredients/bulk-update-prices', {data:ingredients});
}

export async function epUpdateIngredient(id:number,ingredient: IIngredientsRequest){
 await api.put(`/ingredients/${id}`, ingredient);
}

// Services
export async function epPostService(request: IServiceRequest) {
 await api.post('/services', request);
}

export async function epGetServices():Promise<IService[]>{
  const response = await api.get('/services')
   const sortedResponse = response.data.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  return sortedResponse;
}

export async function epDeleteService(id: number){
 await api.delete(`/services/${id}`);
}

export async function epDeleteManyServices(ids: number[]){
  await api.delete('/services/bulk-delete', {data:ids});
}

export async function epUpdateServicesPrices(services: IBulkUpdatePrices[]){
 await api.put('/services/bulk-update-prices', services);
}

export async function epUpdateService(id:number,service: IServiceRequest){
 await api.put(`/services/${id}`, service);
}

//Recipes
export async function epPostRecipe(request: IRecipeRequest) {
await api.post('/recipes', request);
}

export async function epGetRecipes():Promise<IRecipe[]>{
  const response = await api.get('/recipes')
  const sortedResponse = response.data.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return sortedResponse;
}

export async function epGetRecipeDetails(id:number) {
  const response = await api.get(`/recipes/${id}`)
  return response.data;
}

export async function epDeleteRecipe(id: number){
  api.delete(`/recipes/${id}`);
}

export async function epDeleteManyRecipes(ids: number[]){
await api.delete('/recipes/bulk-delete', {data:ids});
}

export async function epUpdateRecipe(id:number,recipe: IRecipeRequest){
 await api.put(`/recipes/${id}`, recipe);
}

//Products
export async function epPostProduct(request: IProductRequest) {
 await api.post('/products', request);
}

export async function epGetProducts():Promise<IProduct[]>{
  const response = await api.get('/products')
   const sortedResponse = response.data.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  return sortedResponse;
}

export async function epGetProductDetails(id:number) {
  await api.get(`/products/${id}`)
}

export async function epDeleteProduct(id: number){
  await api.delete(`/products/${id}`);
}

export async function epDeleteManyProduct(ids: number[]){
  await api.delete('/products/bulk-delete', {data:ids});
}

export async function epUpdateProduct(id:number,product: IProductRequest){
  await api.put(`/products/${id}`, product);
}

//Orders
export async function epPostOrder(request: IOrderRequest) {
  await api.post('/orders', request);
}

export async function epGetOrders():Promise<IOrder[]>{
  const response = await api.get('/orders')
   const sortedResponse = response.data.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  return sortedResponse;
}

export async function epGetOrderDetails(id:number) {
  const response = await api.get(`/orders/${id}`)
  return response.data;
}

export async function epDeleteOrder(id: number){
  await api.delete(`/orders/${id}`);
}

export async function epDeleteManyOrders(ids: number[]){
  await api.delete('/orders/bulk-delete', {data:ids});
}

export async function epUpdateOrder(id:number,order: IOrderRequest){
  await api.put(`/orders/${id}`, order);
}


