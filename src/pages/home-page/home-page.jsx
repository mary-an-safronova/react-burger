import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import homePageStyle from  './home-page.module.css';
import { BurgerIngredients, BurgerConstructor } from '../../components'
import { getData } from '../../services/actions/burger-ingredients';

const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
      <DndProvider backend={HTML5Backend}>
        <main className={homePageStyle.homePage}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>
  );
}

export default HomePage;