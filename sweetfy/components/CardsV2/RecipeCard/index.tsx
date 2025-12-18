import { IRecipe } from '@/api/register/types';
import { ContainerCard } from '@/components/Cards/RecipeCard/style';
import { getAbbreviationUnitType } from '@/pagesContent/registerItems/utils';
import { H5, Label, P_medium, P_semi } from '@/theme/fontsTheme';
import { theme } from '@/theme/theme';
import { View } from 'react-native';
import { ContainerCardRecipe, FieldLine, TagsContainer } from '../styles';

interface IRecipeData {
  recipeData: IRecipe;
  selectCardFunction?(): void;
  selected?: boolean;
}

const RecipeCard = ({
  recipeData,
  selectCardFunction,
  selected,
}: IRecipeData) => {
  return (
    <ContainerCardRecipe
      onPress={selectCardFunction}
      isSelected={selected}
    >
      <H5 colorKey="darkBrown">{recipeData.name}</H5>
      <FieldLine>
        <P_semi
          colorKey="darkBrown"
          style={{ maxWidth: '45%' }}
        >
          Rendimento total
        </P_semi>
        <P_medium colorKey="darkBrown">
          {recipeData.yieldQuantity}
          {getAbbreviationUnitType(recipeData.yieldUnit.toString())}
        </P_medium>
      </FieldLine>
      <FieldLine>
        <P_semi colorKey="darkBrown">Custos incalculáveis</P_semi>
        <P_medium colorKey="darkBrown">
          {recipeData.yieldQuantity}
          {getAbbreviationUnitType(recipeData.additionalCostPercent.toString())}
          %
        </P_medium>
      </FieldLine>
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <P_semi colorKey="darkBrown">Custo Total</P_semi>
        <P_medium colorKey="darkBrown">
          R$ {(recipeData.yieldQuantity * recipeData.baseCost).toFixed(2)}
        </P_medium>
      </View>
      <TagsContainer>
        {recipeData.recipeIngredients &&
          recipeData.recipeIngredients.length > 0 &&
          recipeData.recipeIngredients.map((ingredient, key) => (
            <Label
              style={{
                backgroundColor: theme.colors.white,
                padding: 5,
                borderRadius: 7,
              }}
              key={key}
              colorKey="pinkRed"
            >
              {ingredient.ingredientName}
            </Label>
          ))}
      </TagsContainer>
    </ContainerCardRecipe>
  );
};

export default RecipeCard;
