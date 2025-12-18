import { theme } from '@/theme/theme';
import styled from 'styled-components/native';

export const ContainerCardOrder = styled.TouchableOpacity<{isSelected:boolean}>`
background-color: ${({isSelected}) => isSelected ? theme.colors.lightBlue : theme.colors.inputWhite};
  border-left-width: 6px;
  border-left-color: ${theme.colors.pinkRed};
  border-color: ${theme.colors.pinkRed};
  border-width: 1px;
  border-radius: 10px;
  margin: 5px;
  padding: 12px;
  gap: 10px;
  margin-left: 10px;
  max-height: 200px;
  max-width: 320px;
`;

export const ContainerCardProduct = styled.TouchableOpacity<{isSelected:boolean}>`
background-color: ${({isSelected}) => isSelected ? theme.colors.lightBlue : theme.colors.inputWhite};
  border-left-width: 6px;
  border-left-color: ${theme.colors.pinkRed};
  border-color: ${theme.colors.pinkRed};
  border-width: 1px;
  border-radius: 10px;
  margin: 5px;
  padding: 12px;
  gap: 12px;
  margin-left: 10px;
  max-height: 200px;
  max-width: 200px;
`;

export const ContainerCardRecipe = styled.TouchableOpacity<{isSelected:boolean}>`
background-color: ${({isSelected}) => isSelected ? theme.colors.lightBlue : theme.colors.inputWhite};
  border-left-width: 6px;
  border-left-color: #880741;
  border-color: #880741;
  border-width: 1px;
  border-radius: 10px;
  margin: 5px;
  padding: 12px;
  gap: 12px;
  margin-left: 10px;
  max-height: 300px;
  max-width: 300px;
`;

export const ContainerPrice = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export const TitleContainer = styled.View`
    width: 100%;
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    maxHeight: 25%;
` 

export const IconText=styled.View`
    flexDirection: row; 
    gap: 2;
`

export const FieldLine = styled.View`
    width: 100%;
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
`

export const TagsContainer = styled.View`
    width: 100%;
    flexDirection: row;
    gap: 10;
    overflow:hidden;
`

export const IconWithText=styled.View`
    backgroundColor: ${theme.colors.green};
    padding: 5px;
    borderRadius: 6px;
    flexDirection: row;
    alignItems: center;
    gap: 5;
    flexShrink: 0;
`

