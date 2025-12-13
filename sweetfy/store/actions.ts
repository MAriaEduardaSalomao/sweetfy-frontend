import { AppDispatch } from './index'; 
import { setSession, clearSession, setLoading } from './authSlice';
import { getStorageItem, removeStorageItem, setStorageItem } from '@/utils';
import { IAuth } from '@/api/auth/types';

export const loginUser = ({ token, refreshToken }: IAuth) => async (dispatch: AppDispatch) => {
  try {
    await setStorageItem('token', token); 
    await setStorageItem('refreshToken', refreshToken);
    dispatch(setSession(token));          
  } catch (error) {
    console.error("Erro ao salvar token", error);
  }
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
  try {
    await removeStorageItem('token');    
    dispatch(clearSession());            
  } catch (error) {
    console.error("Erro ao remover token", error);
  }
};

export const loadUserSession = () => async (dispatch: AppDispatch) => {
    console.log("📥 [ACTION] Tentando carregar sessão do disco...");
  dispatch(setLoading(true));
  try {
    const token = await getStorageItem('token');
    console.log("📦 [ACTION] Token no disco:", token ? "ENCONTRADO" : "NÃO ENCONTRADO");
    if (token) {
      dispatch(setSession(token));
    } else {
      dispatch(setLoading(false));
    }
  } catch (error) {
    console.error("Erro ao carregar sessão", error);
    dispatch(setLoading(false));
  }
};