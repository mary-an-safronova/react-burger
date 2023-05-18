import { BrowserRouter, Routes, Route } from 'react-router-dom';
import appStyle from  './app.module.css';
import AppHeader from '../app-header/app-header';
import HomePage from '../../pages/home-page/home-page';
import Login from '../../pages/login/login';
import Register from '../../pages/register/register';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import NotFound404 from '../../pages/not-found/not-found';

const App = () => {

  return (
    <BrowserRouter>
      <div className={appStyle.app}>
        <AppHeader />

          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
          
      </div>
    </BrowserRouter>
  );
}

export default App;