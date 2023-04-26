import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../services/actions/burger-ingredients'
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import switchStyle from  './switch.module.css';

const Switch = ({ bunRef, mainRef, sauceRef }) => {

  const current = useSelector((store) => store.burgerIngredients.current)

  const dispatch = useDispatch()

  const handleBunTabClick = (value) => {
    bunRef.current.scrollIntoView({behavior: "smooth"});
    dispatch(setActiveTab(value))
  }

  const handleMainTabClick = (value) => {
    mainRef.current.scrollIntoView({behavior: "smooth"});
    dispatch(setActiveTab(value))
  }

  const handlesauceTabClick = (value) => {
    sauceRef.current.scrollIntoView({behavior: "smooth"});
    dispatch(setActiveTab(value))
  }

  return (
    <ul className={switchStyle.switch}>
          <li><Tab value='bun' active={current === 'bun'} onClick={handleBunTabClick}>{'Булки'}</Tab></li>
          <li><Tab value='main' active={current === 'main'} onClick={handleMainTabClick}>{'Начинки'}</Tab></li>
          <li><Tab value='sauce' active={current === 'sauce'} onClick={handlesauceTabClick}>{'Соусы'}</Tab></li>
    </ul>
  );
}

Switch.propTypes = {
  bunRef: PropTypes.object.isRequired,
  mainRef: PropTypes.object.isRequired,
  sauceRef: PropTypes.object.isRequired,
}

export default Switch;
