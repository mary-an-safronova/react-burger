import { useSelector } from 'react-redux';
import cardsStyle from './cards.module.css';
import { Card } from '..';
import { RootState } from '../../services/types';
import { FC } from 'react';

type TCardsProps = {
    readonly scrollToRef: () => void;
    readonly typesItem: string;
    readonly typesText: string;
}

const Cards: FC<TCardsProps> = ({ scrollToRef, typesItem, typesText }) => {

    const burgerIngredients = (state: RootState) => state.burgerIngredients;
    const { ingredients } = useSelector(burgerIngredients);

    return (
        <div>
            <h2 className="text text_type_main-medium pb-5 mb-1 mt-5 pt-5" ref={scrollToRef} id={typesItem}>{typesText}</h2>
            <ul className={cardsStyle.cards}>
                {ingredients?.map(card => {
                    return (card.type === typesItem ? <Card key={card._id} card={card} /> : null)
                })}
            </ul>
        </div>
    )
}

export default Cards;