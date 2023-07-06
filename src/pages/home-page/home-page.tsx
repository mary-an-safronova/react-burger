import { useEffect } from "react";
import { useDispatch, useSelector } from '../../services/hooks';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import homePageStyle from  './home-page.module.css';
import { BurgerIngredients, BurgerConstructor, Loading, AnimationFollowingMouse } from '../../components'
import { getData } from '../../services/actions/burger-ingredients';
import { RootState } from "../../services/types";

const HomePage = () => {
  const orderDetails = (state: RootState) => state.orderDetails;
  const { isLoading } = useSelector(orderDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
      <DndProvider backend={HTML5Backend}>
        {
          isLoading && 
            <>
                <Loading />
                <AnimationFollowingMouse />
            </>
        }
        <main className={homePageStyle.homePage}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>
  );
}

export default HomePage;