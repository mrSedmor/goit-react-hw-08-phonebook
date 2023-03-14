import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux/es/exports';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar, AuthLayout } from '../';
import UserRoutes from 'UserRoutes';
import { store, persistor } from 'redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <Navbar />
            <UserRoutes />
            <ToastContainer
              position="top-center"
              autoClose={2000}
              className="toast"
            />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
}
