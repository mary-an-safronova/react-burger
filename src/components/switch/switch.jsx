import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../services/actions/burger-ingredients'
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import switchStyle from  './switch.module.css';

const Switch = ({ bunRef, mainRef, sauceRef }) => {

  const current = useSelector((store) => store.burgerIngredients.current)

  const dispatch = useDispatch()

  const handleTabClick = (value) => {
    dispatch(setActiveTab(value));
    switch (value) {
      case 'bun' : return bunRef.current.scrollIntoView({behavior: "smooth"});
      case 'main' : return mainRef.current.scrollIntoView({behavior: "smooth"});
      case 'sauce' : return sauceRef.current.scrollIntoView({behavior: "smooth"});
     };
  }

  return (
    <ul className={switchStyle.switch}>
          <li><Tab value='bun' active={current === 'bun'} onClick={handleTabClick}>{'Булки'}</Tab></li>
          <li><Tab value='main' active={current === 'main'} onClick={handleTabClick}>{'Начинки'}</Tab></li>
          <li><Tab value='sauce' active={current === 'sauce'} onClick={handleTabClick}>{'Соусы'}</Tab></li>
    </ul>
  );
}

Switch.propTypes = {
  bunRef: PropTypes.object.isRequired,
  mainRef: PropTypes.object.isRequired,
  sauceRef: PropTypes.object.isRequired,
}

export default Switch;
