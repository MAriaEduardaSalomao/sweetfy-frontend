import {
  epDeleteIngredient,
  epDeleteManyIngredients,
  epGetIngredients,
  epUpdateIngredient,
  epUpdateIngredientsPrices,
} from '@/api/register/registerItem';
import { IIngredient } from '@/api/register/types';
import DinamicButton from '@/components/Buttons';
import InputItens from '@/components/Inputs';
import DinamicHeader from '@/components/PageTips/DinamicHeader';
import { getAbbreviationUnitType } from '@/pagesContent/registerItems/utils';
import { H4, H5, H6_bold, H6_medium, Label, P } from '@/theme/fontsTheme';
import { primaryTheme, secondaryTheme, theme } from '@/theme/theme';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { DataTable, Icon, IconButton } from 'react-native-paper';

const MyComponent = () => {
  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([10, 100]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );
  const [isSelectionModeActive, setIsSelectionModeActive] = useState(false);
  const [selectedItemIds, setSelectedItemIds] = useState<number[]>([]);
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [selectMode, setSelectMode] = useState<'delete' | 'edit' | 'default'>(
    'default'
  );

  const getIngredients = async () => {
    try {
      const response = await epGetIngredients();
      const sortedResponse = response.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setIngredients(sortedResponse);
    } catch (e) {
      console.error(e);
    }
  };

  const toggleItemSelection = (itemId: number) => {
    setSelectedItemIds((prevSelected) => {
      if (prevSelected.includes(itemId)) {
        return prevSelected.filter((id) => id !== itemId);
      } else {
        return [...prevSelected, itemId];
      }
    });
  };

  const handleSelectPress = () => {
    if (isSelectionModeActive) {
      setSelectedItemIds([]);
    }
    setIsSelectionModeActive((prev) => !prev);
  };

  const handleDelete = async () => {
    try {
      if (selectedItemIds.length > 1) {
        await epDeleteManyIngredients(selectedItemIds);
      } else {
        await epDeleteIngredient(selectedItemIds[0]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      getIngredients();
    }
  };
  const handleUpdate = async () => {
    try {
      if (selectedItemIds.length > 1) {
        // await epUpdateIngredientsPrices([{ }]);
      } else {
        // await epUpdateIngredient(selectedItemIds[0],{});
      }
    } catch (e) {
      console.error(e);
    } finally {
      getIngredients();
    }
  };

  const handleSelectAllPress = () => {
    const allIds = ingredients.map((p) => p.id);
    const currentlyAllSelected = selectedItemIds.length === ingredients.length;

    if (currentlyAllSelected) {
      setSelectedItemIds([]);
    } else {
      setSelectedItemIds(allIds);
    }

    if (!isSelectionModeActive) {
      setIsSelectionModeActive(true);
    }
  };

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, ingredients.length);

  useEffect(() => {
    getIngredients();
    setPage(0);
  }, [itemsPerPage]);

  return (
    <>
      <DinamicHeader></DinamicHeader>
      <View style={{ flexDirection: 'column', gap: 10, padding: 15 }}>
        <H4 colorKey="darkBrown">Insumos</H4>
        {selectMode !== 'default' ? (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              gap: 30,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                gap: 10,
              }}
            >
              <Label
                onPress={handleSelectPress}
                colorKey="darkBrown"
                style={{
                  backgroundColor: theme.colors.yellow,
                  padding: 6,
                  borderRadius: 8,
                }}
              >
                {isSelectionModeActive
                  ? `${selectedItemIds.length} selecionado(s)`
                  : 'Selecionar'}
              </Label>

              {selectedItemIds.length !== ingredients.length && (
                <Label
                  onPress={handleSelectAllPress}
                  colorKey="darkBrown"
                  style={{
                    backgroundColor: theme.colors.yellow,
                    padding: 6,
                    borderRadius: 8,
                  }}
                >
                  Selecionar todos
                </Label>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                gap: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: theme.colors.yellowLight,
                  padding: 5,
                  borderRadius: 6,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                }}
                onPress={() => {
                  setSelectMode('default');
                }}
              >
                <Icon
                  size={12}
                  color={theme.colors.darkBrown}
                  source="close"
                />
                <Label colorKey="pinkRed">Cancelar</Label>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: theme.colors.pinkRed,
                  padding: 5,
                  borderRadius: 6,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                }}
                onPress={() => {
                  selectMode === 'delete' ? handleDelete() : handleUpdate();
                  setSelectMode('default');
                }}
              >
                <Icon
                  size={12}
                  color={theme.colors.yellowLight}
                  source="check"
                />
                <Label colorKey="yellowLight">Confirmar</Label>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{ flexDirection: 'row', gap: 15 }}>
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.yellow,
                padding: 5,
                borderRadius: 6,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}
              onPress={() => {
                setSelectMode('delete');
              }}
            >
              <Icon
                size={12}
                color={theme.colors.darkBrown}
                source="trash-can-outline"
              />
              <Label colorKey="darkBrown">Excluir</Label>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.yellow,
                padding: 5,
                borderRadius: 6,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}
              onPress={() => {
                setSelectMode('edit');
              }}
            >
              <Icon
                size={12}
                color={theme.colors.darkBrown}
                source="pencil-outline"
              />
              <Label colorKey="darkBrown">Editar</Label>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={{ paddingHorizontal: 5 }}>
        <DataTable
          style={{
            backgroundColor: theme.colors.inputWhite,
            borderRadius: 8,
            gap: 5,
          }}
        >
          <DataTable.Header
            style={{
              borderBottomColor: theme.colors.pinkRed,
              borderBottomWidth: 2,
            }}
          >
            <DataTable.Title
              style={{
                flex: 1,
              }}
            >
              {' '}
              <H6_bold colorKey="darkBrown">Nome</H6_bold>
            </DataTable.Title>
            <DataTable.Title
              numeric
              style={{ flex: 1 }}
            >
              <H6_bold colorKey="darkBrown">Marca</H6_bold>
            </DataTable.Title>
            <DataTable.Title
              numeric
              style={{ flex: 1 }}
            >
              <H6_bold colorKey="darkBrown">Medidas</H6_bold>
            </DataTable.Title>
            <DataTable.Title
              numeric
              style={{ flex: 1 }}
            >
              <H6_bold colorKey="darkBrown">Preço</H6_bold>
            </DataTable.Title>
          </DataTable.Header>

          {ingredients
            .slice(from, to)
            .sort()
            .map((item) => (
              <DataTable.Row
                key={item.id}
                style={{
                  borderBottomColor: theme.colors.lightBlue,
                }}
              >
                <DataTable.Cell style={{ flex: 1 }}>
                  {isSelectionModeActive ? (
                    <InputItens theme={primaryTheme}></InputItens>
                  ) : (
                    <P colorKey="darkBrown">{item.name}</P>
                  )}
                </DataTable.Cell>

                <DataTable.Cell
                  numeric
                  style={{ flex: 1 }}
                >
                  <P colorKey="darkBrown">{item.brand}</P>
                </DataTable.Cell>
                <DataTable.Cell
                  numeric
                  style={{ flex: 1 }}
                >
                  <P
                    colorKey="darkBrown"
                    style={{ marginRight: 3 }}
                  >
                    {item.quantity}
                    {getAbbreviationUnitType(item.unit.toString())}
                  </P>
                </DataTable.Cell>
                <DataTable.Cell
                  numeric
                  style={{ flex: 1 }}
                >
                  R${item.unitPrice}
                </DataTable.Cell>
              </DataTable.Row>
            ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(ingredients.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${ingredients.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={'Linhas por página'}
          />
        </DataTable>
      </View>
    </>
  );
};

export default MyComponent;
