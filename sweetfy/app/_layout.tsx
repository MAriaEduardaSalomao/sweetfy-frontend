import React, { useEffect } from 'react';
import { PaperProvider, Portal } from 'react-native-paper';
import { Stack, useRouter, useSegments } from 'expo-router';
import { primaryTheme } from '../theme/theme';
import '../app/app.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch, store } from '@/store';
import { loadUserSession } from '@/store/actions';
const RootLayoutNav = () => {
  const { session, isLoading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    dispatch(loadUserSession());
  }, [dispatch]);

  useEffect(() => {
    console.log('🧐 [LAYOUT CHECK]');
    console.log('   - Session:', session ? 'TEM TOKEN' : 'NULO');
    console.log('   - IsLoading:', isLoading);
    console.log('   - Segmento:', segments[0]);
  }, [session, isLoading, segments]);

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (session) {
      if (inAuthGroup || !segments[0]) {
        console.log('🚀 [REDIRECIONAMENTO] Vai para Home');
        router.replace('/(tabs)/home');
      }
    } else {
      if (!inAuthGroup) {
        console.log('🚫 [BLOQUEIO] Vai para Login');
        router.replace('/(auth)/login');
      }
    }
  }, [session, isLoading, segments, router]);

  return (
    <Stack>
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PaperProvider theme={primaryTheme}>
        <Portal.Host>
          <RootLayoutNav />
        </Portal.Host>
      </PaperProvider>
    </Provider>
  );
}
