import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  session: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  session: null,
  isLoading: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<string | null>) => {
      state.session = action.payload;
      state.isLoading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    clearSession: (state) => {
      state.session = null;
      state.isLoading = false;
    },
  },
});

export const { setSession, setLoading, clearSession } = authSlice.actions;
export default authSlice.reducer;