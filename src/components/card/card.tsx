import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import cardStyle from './card.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { PATH } from '../../utils/api';
import { RootState } from '../../services/types';
import { FC } from 'react';
import { TIngredient } from '../../services/types/data';

type TCardProps = {
    readonly card: TIngredient;
}

const Card: FC<TCardProps> = ({ card }) => {
    const navigate = useNavigate();
    const { id } = useParams();

    const burgerConstructor = (state: RootState) => state.burgerConstructor;
    const { ingredientList, bunsList } = useSelector(burgerConstructor);

    const counter = useMemo(() => (
        ingredientList.filter((item) => item._id === card._id).length || bunsList.filter((item) => item._id === card._id).length * 2
    ), [ingredientList, bunsList, card._id]);

    const [{ opacity } , dragIngredient] = useDrag(() => ({
        type: 'ingredient',
        collect: monitor => {
            return {
				opacity: monitor.isDragging() ? 0.5 : 1,
			}
        },
        item: {
            ingredient: card,
            id: card._id,
            type: card.type,
        },
    }), [])

    return (
        <li className={cardStyle.card} ref={dragIngredient} onClick={() => {
            if (id !== card._id) { navigate(`/ingredients/${card._id}`, { state: { modalFromHomePage: true, background: PATH.HOME }})}
          }} style={{ opacity: opacity }}>
            { counter > 0 ? <div className={cardStyle.card__counter}><Counter count={counter} size ={'default'} /></div> : null }
            <div className={cardStyle.cardWrap} key={card._id}>
                <img className={cardStyle.card__image} src={card.image} alt={card.name} />
                <div className={`${cardStyle.card__price} pb-1 pt-1`}>
                    <p className="text text_type_digits-default mr-2">{card.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <h3 className={`${cardStyle.card__title} text text_type_main-default ml-2`}>{card.name}</h3>
            </div>
        </li>
    )
}

export default Card;