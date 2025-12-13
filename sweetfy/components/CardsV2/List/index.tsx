import {
  IIngredient,
  IOrder,
  IProduct,
  IRecipe,
  IService,
} from '@/api/register/types';
import OrderCard from '../OrderCard';
import { RelativePathString, router } from 'expo-router';
import ProductCard from '../ProductCard';
import RecipeCard from '../RecipeCard';
import IngredientCard from '../IngredientCard';
import ServiceCard from '../ServiceCard';

const OrderList = (items: IOrder[]) => {
  return (
    items.length > 1 &&
    items.map((orderData, index) => (
      <OrderCard
        selectCardFunction={() =>
          router.push({
            pathname: '/(tabs)/seeMoreOrders',
            params: {
              recipeId: JSON.stringify(orderData.id),
            },
          })
        }
        orderData={orderData}
        key={index}
      />
    ))
  );
};

const ProductList = (items: IProduct[]) => {
  return (
    items.length > 1 &&
    items.map((orderData, index) => (
      <ProductCard
        selectCardFunction={() =>
          router.push({
            pathname: '/(tabs)/seeMoreProducts',
            params: {
              recipeId: JSON.stringify(orderData.id),
            },
          })
        }
        productData={orderData}
        key={index}
      />
    ))
  );
};

const RecipeList = (items: IRecipe[]) => {
  return (
    items.length > 1 &&
    items.map((orderData, index) => (
      <RecipeCard
        selectCardFunction={() =>
          router.push({
            pathname: '/(tabs)/seeMoreRecipes',
            params: {
              recipeId: JSON.stringify(orderData.id),
            },
          })
        }
        recipeData={orderData}
        key={index}
      />
    ))
  );
};

const IngredientList = (items: IIngredient[]) => {
  return (
    items.length > 1 &&
    items.map((orderData, index) => (
      <IngredientCard
        selectCardFunction={() =>
          router.push({
            pathname: '/(tabs)/seeMoreIngredients',
            params: {
              recipeId: JSON.stringify(orderData.id),
            },
          })
        }
        ingredientData={orderData}
        key={index}
      />
    ))
  );
};

const ServiceList = (items: IService[]) => {
  return (
    items.length > 1 &&
    items.map((orderData, index) => (
      <ServiceCard
        selectCardFunction={() =>
          router.push({
            pathname: '/(tabs)/seeMoreServices',
            params: {
              recipeId: JSON.stringify(orderData.id),
            },
          })
        }
        serviceData={orderData}
        key={index}
      />
    ))
  );
};

export { OrderList, ProductList, RecipeList, IngredientList, ServiceList };
