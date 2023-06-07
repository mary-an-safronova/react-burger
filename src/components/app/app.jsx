import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import appStyle from  './app.module.css';
import { HomePage,Login, Register, ForgotPassword, ResetPassword, Profile, NotFound404, IngredientDetailsPage, FeedPage, OrderPage } from '../../pages';
import { AppHeader, ProfleUpdateForm, IngredientDetails, Modal, ProtectedRouteElement } from '..';
import { PATH } from '../../utils/api';

const App = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.auth);
  const location = useLocation();
  const background = location.state && location.state.modal;
  const from = location?.state?.from || PATH.HOME;

  const closeModal = () => {
    const background = location.state && location.state.background;
    if (background) {
      navigate(background, { replace: true });
    } else {
      navigate(PATH.HOME, { state: { modal: false } });
    }
  }

  return (
      <div className={appStyle.app}>
        <AppHeader />

          <Routes location={background}>
            <Route path={PATH.HOME} element={<HomePage />} />
            <Route path={PATH.LOGIN} element={ !auth ? <Login /> : <Navigate to={from} /> } />
            <Route path={PATH.REGISTER} element={ !auth ? <Register /> : <Navigate to={from} /> } />
            <Route path={PATH.FORGOT_PASSWORD} element={ !auth ? <ForgotPassword /> : <Navigate to={from} /> } />
            <Route path={PATH.RESET_PASSWORD} element={ !auth ? <ResetPassword /> : <Navigate to={from} /> } />           
            <Route path={PATH.PROFILE} element={<ProtectedRouteElement element={<Profile />}/>}>
              <Route path={PATH.PROFILE} element={<ProfleUpdateForm />} />
              <Route path={PATH.PROFILE_ORDERS} element={<></>} />
              <Route path={PATH.PROFILE_ORDERS_ID} element={<></>} />
            </Route>
            <Route path={PATH.INGREDIENTS_ID} element={!background && <IngredientDetailsPage />} />
            <Route path={PATH.FEED} element={<FeedPage />} />
            <Route path={PATH.FEED_ID} element={<OrderPage />} />
            <Route path={PATH.NOT_FOUND_404} element={<NotFound404 />} />
          </Routes>
          {background &&
            <Routes>
              <Route path={PATH.INGREDIENTS_ID} element={ <Modal onClose={closeModal}><IngredientDetails /></Modal> } />
            </Routes>
          }
      </div>
  );
}

export default App;