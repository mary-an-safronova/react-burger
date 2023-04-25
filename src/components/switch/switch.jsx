import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import switchStyle from  './switch.module.css';

const Switch = ({ bunRef, mainRef, sauceRef }) => {

  const [current, setCurrent] = useState('bun');

  const handleBunTabClick = () => {
    bunRef.current.scrollIntoView({behavior: "smooth"});
    setCurrent('bun')
  }

  const handleMainTabClick = () => {
    mainRef.current.scrollIntoView({behavior: "smooth"});
    setCurrent('main')
  }

  const handlesauceTabClick = () => {
    sauceRef.current.scrollIntoView({behavior: "smooth"});
    setCurrent('sauce')
  }

  return (
    <ul className={switchStyle.switch}>
          <li><Tab value={'bun'} active={current === 'bun'} onClick={handleBunTabClick}>{'Булки'}</Tab></li>
          <li><Tab value={'main'} active={current === 'main'} onClick={handleMainTabClick}>{'Начинки'}</Tab></li>
          <li><Tab value={'sauce'} active={current === 'sauce'} onClick={handlesauceTabClick}>{'Соусы'}</Tab></li>
    </ul>
  );
}

Switch.propTypes = {
  bunRef: PropTypes.object.isRequired,
  mainRef: PropTypes.object.isRequired,
  sauceRef: PropTypes.object.isRequired,
}

export default Switch;
