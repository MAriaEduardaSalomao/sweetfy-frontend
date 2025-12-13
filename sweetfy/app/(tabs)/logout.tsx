import { AppDispatch } from '@/store';
import { logoutUser } from '@/store/actions';
import { useDispatch } from 'react-redux';

export default function Logout() {
  const dispatch = useDispatch<AppDispatch>();
  // implementar modal de confirmação aqui
  return dispatch(logoutUser());
}
