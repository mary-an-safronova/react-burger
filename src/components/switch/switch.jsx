import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../services/actions/burger-ingredients'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import switchStyle from  './switch.module.css';

const Switch = () => {

  const current = useSelector((store) => store.burgerIngredients.current)

  const dispatch = useDispatch()

  const handleTabClick = (value) => {
    dispatch(setActiveTab(value))
    const title = document.getElementById(value);
    if (title) title.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className={switchStyle.switch}>
      <li><Tab value='bun' active={current === 'bun'} onClick={() => handleTabClick('bun')}>{'Булки'}</Tab></li>
      <li><Tab value='main' active={current === 'main'} onClick={() => handleTabClick('main')}>{'Начинки'}</Tab></li>
      <li><Tab value='sauce' active={current === 'sauce'} onClick={() => handleTabClick('sauce')}>{'Соусы'}</Tab></li>
    </ul>
  );
}

export default Switch;
