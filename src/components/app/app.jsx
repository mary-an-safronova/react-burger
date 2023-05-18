import { BrowserRouter, Routes, Route } from 'react-router-dom';
import appStyle from  './app.module.css';
import AppHeader from '../app-header/app-header';
import HomePage from '../../pages/home-page/home-page';
import Login from '../../pages/login/login';

const App = () => {

  return (
    <div className={appStyle.app}>
        <AppHeader />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;