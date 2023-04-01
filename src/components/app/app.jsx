import React from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";
import { useEffect } from "react";
import appStyle from  './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { ingredientType } from '../../utils/types'
import { apiConfig } from '../../utils/constants.js';

const App = () => {

  const [data, setData] = useState(null)

  const getData = () =>
    fetch(`${apiConfig.baseUrl}/ingredients`)
      .then((res) => res.json())

  useEffect(() => {
    getData()
    .then((data) => setData(data.data))
    .catch((err) => { console.log(err) })
  }, [])

  return (
    <div className={appStyle.app}>
      <AppHeader />
      <main className={appStyle.app__main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

App.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(ingredientType.data))
}

export default App;