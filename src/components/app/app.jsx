import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import appStyle from  './app.module.css';
import { HomePage,Login, Register, ForgotPassword, ResetPassword, Profile, NotFound404, IngredientDetailsPage, FeedPage, OrderPage } from '../../pages';
import { AppHeader, ProfleUpdateForm, IngredientDetails, Modal, ProtectedRouteElement, Order, ProfileOrders } from '..';
import { PATH } from '../../utils/api';

const App = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.auth);
  const location = useLocation();
  const from = location?.state?.from || PATH.HOME;

  const background = location?.state?.background;
  const modalFromHomePage = location.state && location.state?.modalFromHomePage;
  const modalFromFeedPage = location.state && location.state?.modalFromFeedPage;
  const modalFromProfilePage = location.state && location.state?.modalFromProfilePage;

  const closeIngredientModal = () => {
    if (background === PATH.HOME) {
      navigate(background, { replace: true });
    } else {
      navigate(-1, { state: { modalFromHomePage: false, background: PATH.HOME } });
    }
  }

  const closeFeedModal = () => {
    if (background === PATH.FEED) {
      navigate(background, { replace: true });
    } else {
      navigate(-1, { state: { modalFromFeedPage: false, background: PATH.FEED } });
    }
  }

  const closeProfileModal = () => {
    if (background === PATH.PROFILE_ORDERS) {
      navigate(background, { replace: true });
    } else {
      navigate(-1, { state: { modalFromProfilePage: false, background: PATH.PROFILE_ORDERS } });
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
              <Route path={PATH.PROFILE_ORDERS} element={<ProfileOrders />} />
            </Route>
            <Route path={PATH.PROFILE_ORDERS_ID} element={ auth ? <OrderPage /> : <Navigate to={from} /> } />   
            <Route path={PATH.INGREDIENTS_ID} element={<IngredientDetailsPage />} />
            <Route path={PATH.FEED} element={<FeedPage />} />
            <Route path={PATH.FEED_ID} element={<OrderPage />} />
            <Route path={PATH.NOT_FOUND_404} element={<NotFound404 />} />
          </Routes>
          {modalFromHomePage &&
            <Routes>
              <Route path={PATH.INGREDIENTS_ID} element={ <Modal onClose={closeIngredientModal}><IngredientDetails /></Modal> } />
            </Routes>
          }
          {modalFromFeedPage &&
            <Routes>
              <Route path={PATH.FEED_ID} element={ <Modal onClose={closeFeedModal}><Order /></Modal> } />
            </Routes>
          }

          {modalFromProfilePage &&
            <Routes>
              <Route path={PATH.PROFILE_ORDERS_ID} element={ <Modal onClose={closeProfileModal}><Order /></Modal> } />
            </Routes>
          }
      </div>
  );
}

export default App;