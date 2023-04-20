import PropTypes from 'prop-types';
import burgerConstructorStyles from './burger-constructor.module.css';
import IngredientCards from '../ingredient-cards/ingredient-cards';
import FinalPrice from '../final-price/final-price';

const BurgerConstructor = (props) => {

    return (
        <section className={burgerConstructorStyles.burgerConstructor}>
            <IngredientCards />
            <FinalPrice handleOrderButtonClick={props.handleOrderButtonClick} />
        </section>
    )
}

BurgerConstructor.propTypes = {
    handleOrderButtonClick: PropTypes.func.isRequired,
}

export default BurgerConstructor;