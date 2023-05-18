import { BrowserRouter, Routes, Route } from 'react-router-dom';
import appStyle from  './app.module.css';
import AppHeader from '../app-header/app-header';
import HomePage from '../../pages/home-page/home-page';
import Login from '../../pages/login/login';
import Register from '../../pages/register/register';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';

const App = () => {

  return (
    <div className={appStyle.app}>
        <AppHeader />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;