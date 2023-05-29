import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
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
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { Modal } from '../modal/modal';
import IngredientDetailsPage from '../../pages/ingredient-details-page/ingredient-details-page';

const App = () => {
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth.auth);

  const location = useLocation();
  const background = location.state && location.state.modal;

  const closeModal = () => {
    const background = location.state && location.state.background;
    if (background) {
      navigate(background, { replace: true });
    } else {
      navigate('/', { state: { modal: false } });
    }
  }

  return (
      <div className={appStyle.app}>
        <AppHeader />

          <Routes location={background}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={ !auth ? <Login /> : <Navigate to={'/'} /> } />
            <Route path="/register" element={ !auth ? <Register /> : <Navigate to={'/'} /> } />
            <Route path="/forgot-password" element={ !auth ? <ForgotPassword /> : <Navigate to={'/'} /> } />
            <Route path="/reset-password" element={ !auth && <ResetPassword /> } />           
            <Route path="/profile" element={<ProtectedRouteElement element={<Profile />}/>}>
              <Route path="/profile" element={<ProfleUpdateForm />} />
              <Route path="/profile/orders" element={<></>} />
              <Route path="/profile/orders/:id" element={<></>} />
            </Route>
            <Route path="/ingredients/:id" element={!background && <IngredientDetailsPage />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
          {background &&
            <Routes>
              <Route path="/ingredients/:id" element={ <Modal onClose={closeModal}><IngredientDetails /></Modal> } />
            </Routes>
          }
      </div>
  );
}

export default App;