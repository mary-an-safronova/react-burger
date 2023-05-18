import appHeaderStyle from  './app-header.module.css';
import { Link } from 'react-router-dom';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
    return (
        <header className={appHeaderStyle.header}>
            <div className={`${appHeaderStyle.header__wrap} pb-4 pt-4`}>
                <nav className={appHeaderStyle.header__nav}>
                    <ul className={appHeaderStyle.header__list}>
                        <li>
                            <Link to={'/'} className={`${appHeaderStyle.header__item} ${appHeaderStyle.header__link} pb-4 pt-4 pl-5 pr-5`}>
                                <BurgerIcon type="primary" />
                                <p className="text text_type_main-default ml-2">Конструктор</p>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className={appHeaderStyle.header__link}>
                                <div className={`${appHeaderStyle.header__item} pb-4 pt-4 pl-5 pr-5`}>
                                    <ListIcon type="secondary" />
                                    <p className="text text_type_main-default text_color_inactive ml-2">Лента заказов</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={appHeaderStyle.header__logo}>
                    <Logo />
                </div>
                
                <Link to={'/profile'} className={`${appHeaderStyle.header__item} ${appHeaderStyle.header__link} pb-4 pt-4 pl-5 pr-5`}>
                    <ProfileIcon type="secondary" />
                    <p className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</p>
                </Link>
            </div>
        </header>
        );
}

export default AppHeader;