import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import appStyle from  './app.module.css';
import AppHeader from '../app-header/app-header';
import HomePage from '../../pages/home-page/home-page';
import Login from '../../pages/login/login';
import Register from '../../pages/register/register';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import NotFound404 from '../../pages/not-found/not-found';
import ProfleUpdateForm from '../../components/profile-update-form/profile-update-form';
import ProtectedRouteElement from '../protected-route-element/protected-route-element';

const App = () => {
  const auth = useSelector((state) => state.auth.auth);

  return (
    <BrowserRouter>
      <div className={appStyle.app}>
        <AppHeader />

          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={ !auth ? <Login /> : <Navigate to={'/'} /> } />
            <Route path="/register" element={ !auth ? <Register /> : <Navigate to={'/'} /> } />
            <Route path="/forgot-password" element={ !auth ? <ForgotPassword /> : <Navigate to={'/'} /> } />
            <Route path="/reset-password" element={ !auth && <ResetPassword /> } />           
            <Route path="/profile" element={<ProtectedRouteElement element={<Profile />}/>}>
              <Route path="/profile" element={<ProfleUpdateForm />} />
              <Route path="/profile/orders" element={<NotFound404 />} />
              <Route path="/profile/orders/:id" element={<NotFound404 />} />
            </Route>
            <Route path="*" element={<NotFound404 />} />
          </Routes>
          
      </div>
    </BrowserRouter>
  );
}

export default App;