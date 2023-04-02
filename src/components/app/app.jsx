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
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { OrderDetails } from '../order-details/order-details';

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = React.useState(false);

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

  const handleIngredientClick = (item) => {
    setItem(item)
    setOpenModal(!openModal);
  }

  const handleOrderButtonClick = () => {
    setItem(false);
    setOpenModal(!openModal);
  }

  const closeModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className={appStyle.app}>
      <AppHeader />
      <main className={appStyle.app__main}>
        <BurgerIngredients data={ingredients} handleIngredientClick={handleIngredientClick} />
        <BurgerConstructor data={ingredients} handleOrderButtonClick={handleOrderButtonClick} />
      </main>
      {
      openModal && <Modal onClose={closeModal}>
        { item ? <IngredientDetails card={item} /> : <OrderDetails /> }
      </Modal>
      }
    </div>
  );
}

App.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(ingredientType.data))
}

export default App;