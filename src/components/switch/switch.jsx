import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import switchStyle from  './switch.module.css';

const Switch = ({ ingredients }) => {
  const defaultIngredient = ingredients[0].type;

  const [current, setCurrent] = React.useState(defaultIngredient);

  return (
    <div className={switchStyle.switch}>
      {ingredients.map((ingredient, index) => {
        return (
          <li key={index}>
            <a className={switchStyle.switch__link} href={`#${ingredient.text}`}>
              <Tab value={ingredient.type} active={current === ingredient.type} onClick={setCurrent}>{ingredient.text}</Tab>
            </a>
          </li>
        );
      })}
    </div>
  );
}

Switch.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
})).isRequired
}

export default Switch;
