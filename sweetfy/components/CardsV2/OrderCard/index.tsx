import { IOrder } from '@/api/register/types';
import { H5, Label, P, P_medium, P_semi } from '@/theme/fontsTheme';
import { theme } from '@/theme/theme';
import { Icon } from 'react-native-paper';
import {
  ContainerCardOrder,
  FieldLine,
  IconWithText,
  TagsContainer,
  TitleContainer,
} from '../styles';

interface IOrderCard {
  orderData: IOrder;
  selectCardFunction?(): void;
  selected?: boolean;
}
const OrderCard = ({ orderData, selected, selectCardFunction }: IOrderCard) => {
  return (
    <ContainerCardOrder
      onPress={selectCardFunction}
      isSelected={selected}
    >
      <TitleContainer>
        <H5
          colorKey="darkBrown"
          style={{ maxWidth: '45%' }}
          numberOfLines={2}
        >
          {orderData.name}
        </H5>
        <IconWithText>
          <Icon
            size={12}
            color={theme.colors.white}
            source="sack-percent"
          />
          <Label colorKey="white">
            {((orderData.profit / orderData.totalCost) * 100).toFixed(2)}%
          </Label>
        </IconWithText>
      </TitleContainer>

      <FieldLine>
        <P_semi
          colorKey="darkBrown"
          style={{ maxWidth: '45%' }}
        >
          Rendimento total
        </P_semi>
        <P colorKey="darkBrown">{orderData.totalYield} unid.(s)</P>
      </FieldLine>
      <FieldLine>
        <P_semi
          colorKey="darkBrown"
          style={{ maxWidth: '45%' }}
        >
          Preço de venda
        </P_semi>
        <P colorKey="darkBrown">R$ {orderData.salePrice}</P>
      </FieldLine>
      <FieldLine>
        <P_medium
          colorKey="red"
          style={{ maxWidth: '45%' }}
        >
          Custo total
        </P_medium>
        <P colorKey="red">R$ {orderData.totalCost}</P>
      </FieldLine>
      <FieldLine>
        <P_medium
          colorKey="green"
          style={{ maxWidth: '45%' }}
        >
          Lucro total
        </P_medium>
        <P colorKey="green">R$ {orderData.profit}</P>
      </FieldLine>

      <TagsContainer>
        {orderData.orderProducts.length > 0 &&
          orderData.orderProducts.map((orderProduct, index) => (
            <Label
              style={{
                backgroundColor: theme.colors.white,
                padding: 5,
                borderRadius: 7,
                justifyContent: 'center',
              }}
              key={index}
              colorKey="pinkRed"
            >
              {orderProduct.quantity} x {orderProduct.productName}
            </Label>
          ))}
      </TagsContainer>
    </ContainerCardOrder>
  );
};

export default OrderCard;
