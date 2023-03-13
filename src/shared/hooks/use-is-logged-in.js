import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

const useIsLoggedIn = () => useSelector(selectIsLoggedIn);

export default useIsLoggedIn;
