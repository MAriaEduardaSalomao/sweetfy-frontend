import { theme } from "../../theme/theme";
import styled from "styled-components/native";

export const PageContainer = styled.View`
    flex: 1;
    background-color: ${theme.colors.darkBrown};
    margin-bottom: 50px;
`

export const ContentContainer = styled.ScrollView.attrs({
    contentContainerStyle:{
    justifyContent: 'center',
    padding: 16,
    marginTop: 10
    }
})``;

export const TitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const IconsContainer = styled.View`
    display: flex;
    flex-direction: row;
`;

export const FormContainer = styled.View`
    display: flex;  
    flex-direction: column;
    gap: 20px;
    padding: 8px;
`;

export const QuantityInputsContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 10px;
    z-index: 10;
    elevation: 5;
`;



