import appHeaderStyle from  './app-header.module.css';
import { NavLink } from 'react-router-dom';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
    const pendingLink = `${appHeaderStyle.header__item} ${appHeaderStyle.header__link} pb-4 pt-4 pl-5 pr-5`;
    const activeLink = `${appHeaderStyle.header__link_active} ${appHeaderStyle.header__item} ${appHeaderStyle.header__link} pb-4 pt-4 pl-5 pr-5`;

    const pendingText = 'text text_type_main-default text_color_inactive ml-2';
    const activeText = 'text text_type_main-default ml-2';

    return (
        <header className={appHeaderStyle.header}>
            <div className={`${appHeaderStyle.header__wrap} pb-4 pt-4`}>
                <nav className={appHeaderStyle.header__nav}>
                    <ul className={appHeaderStyle.header__list}>
                        <li>
                            <NavLink to={'/'} className={ ({ isActive }) => isActive ? activeLink : pendingLink }>
                                {({ isActive }) => (
                                    <>
                                    <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
                                    <p className={ isActive ? activeText : pendingText }>Конструктор</p>
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'*'} className={ ({ isActive }) => isActive ? activeLink : pendingLink }>
                                {({ isActive }) => (
                                    <>
                                    <ListIcon type={isActive ? 'primary' : 'secondary'} />
                                    <p className={ isActive ? activeText : pendingText }>Лента заказов</p>
                                    </>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={appHeaderStyle.header__logo}>
                    <Logo />
                </div>
                
                <NavLink to={'/profile'} className={ ({ isActive }) => isActive ? activeLink : pendingLink }>
                    {({ isActive }) => (
                        <>
                        <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
                        <p className={ isActive ? activeText : pendingText }>Личный кабинет</p>
                        </>
                    )}
                </NavLink>
            </div>
        </header>
        );
}

export default AppHeader;