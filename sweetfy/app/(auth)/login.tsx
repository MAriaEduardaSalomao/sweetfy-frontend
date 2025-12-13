import DinamicButton from '@/components/Buttons';
import DividerWithText from '@/components/DividerWithText';
import InputItens from '@/components/Inputs';
import { primaryTheme, theme } from '../../theme/theme';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { router } from 'expo-router';
import { fetchLogin } from '../../api/auth/auth';
import AuthTemplate from '@/components/Templates/auth';
import DinamicSnackbar, {
  DinamicSnackbarType,
} from '@/components/DinamicSnackbar';
import { InputsContent } from '@/components/Templates/styles';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { loginUser } from '@/store/actions';

const LoginPageComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatusMessage, setResponseStatusMessage] =
    useState<DinamicSnackbarType>('error');

  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = async () => {
    try {
      setEmail('');
      setPassword('');
      setLoading(true);
      const response = await fetchLogin({ email, password });
      setResponseStatusMessage('success');
      await dispatch(
        loginUser({
          token: response.accessToken,
          refreshToken: response.refreshToken || '',
        })
      );
    } catch (e) {
      console.error(e);
      setResponseStatusMessage('error');
    } finally {
      setShowResponseStatus(true);
      setLoading(false);
    }
  };

  return (
    <AuthTemplate subtitle="Insira seus dados para que possamos começar!">
      <InputsContent>
        <InputItens
          inputMode="email"
          theme={primaryTheme}
          placeholder="Email"
          keyboardType="email-address"
          title="Insira seu email"
          onChangeText={setEmail}
          value={email}
        />
        <InputItens
          inputMode="text"
          theme={primaryTheme}
          keyboardType="default"
          placeholder="Senha"
          title="Insira sua senha"
          securityRequired
          onChangeText={setPassword}
          value={password}
        />
      </InputsContent>
      {loading ? (
        <ActivityIndicator
          animating={true}
          color={theme.colors.yellowLight}
        />
      ) : (
        <DinamicButton
          buttonStyle={{ width: '80%' }}
          buttonText="Confirmar"
          type="brownLight"
          onPress={handleLogin}
        />
      )}

      <DividerWithText
        text="Ainda não tem uma conta?"
        style={{ maxWidth: '85%' }}
      />

      <DinamicButton
        buttonStyle={{ width: '80%' }}
        buttonText="Cadastre-se"
        onPress={() => router.push('/register')}
        type="outlined"
        disabled={loading}
      />

      <DinamicSnackbar
        isVisible={showResponseStatus}
        OnDismissFunction={() => setShowResponseStatus(false)}
        type={responseStatusMessage}
      />
    </AuthTemplate>
  );
};

export default LoginPageComponent;
