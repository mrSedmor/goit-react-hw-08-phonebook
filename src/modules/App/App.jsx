import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../';
import UserRoutes from 'UserRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
  );
}
