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
import { Modal } from '../modal/modal';

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const getData = () =>
    fetch(`${apiConfig.baseUrl}/ingredients`)
      .then((res) => res.json())

  useEffect(() => {
    getData()
    .then(({ success, data }) => {
      if (success) {
        setIngredients(data)
      }
    })
    .catch((err) => { console.log(err) })
  }, [])

  const closeModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className={appStyle.app}>
      <AppHeader />
      <main className={appStyle.app__main}>
        <BurgerIngredients data={ingredients} />
        <BurgerConstructor data={ingredients} />
      </main>
      <Modal onClose={closeModal} />
    </div>
  );
}

App.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(ingredientType.data))
}

export default App;