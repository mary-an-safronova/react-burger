import { useSelector, useDispatch } from '../../services/hooks';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import burgerIngredientsStyle from  './burger-ingredients.module.css';
import { Switch, Cards } from '..';
import { setActiveTab } from '../../services/actions/burger-ingredients';
import { RootState } from '../../services/types';

const BurgerIngredients = () => {
    const burgerIngredients = (state: RootState) => state.burgerIngredients;
    const { current } = useSelector(burgerIngredients);

    const dispatch = useDispatch()

    const [bunRef, inViewBuns] = useInView({ threshold: 0 });
    const [mainRef, inViewMains] = useInView({ threshold: 0 });
    const [sauceRef, inViewSauces] = useInView({ threshold: 0 });

    useEffect(() => {
        inViewBuns ? dispatch(setActiveTab('bun')) :
        inViewSauces ? dispatch(setActiveTab('sauce')) :
        dispatch(setActiveTab('main'))
    }, [current, inViewBuns, inViewMains, inViewSauces, dispatch]);

return (
    <section className={`${burgerIngredientsStyle.ingredients} pt-10`}>
        <h1 className={`${burgerIngredientsStyle.title} text text_type_main-large mb-5`}>Соберите бургер</h1>
        <Switch />
        <div className={burgerIngredientsStyle.scrollWrap}>
            <div className={burgerIngredientsStyle.scroll}>
                <Cards scrollToRef={bunRef} typesItem={'bun'} typesText='Булки' />
                <Cards scrollToRef={mainRef} typesItem={'main'} typesText='Начинки' />
                <Cards scrollToRef={sauceRef} typesItem={'sauce'} typesText='Соусы' />
            </div>
        </div>
    </section>
)
}

export default BurgerIngredients;