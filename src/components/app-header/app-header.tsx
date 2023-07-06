import { FC } from 'react';
import { useSelector } from '../../services/hooks';
import appHeaderStyle from  './app-header.module.css';
import { NavLink } from 'react-router-dom';
import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { PATH } from '../../utils/api';
import { RootState } from '../../services/types';

const AppHeader: FC = () => {
    const auth = useSelector((state: RootState) => state.auth.auth);
    const name = useSelector((state: RootState) => state.auth.user.name);

    const pendingLink = `${appHeaderStyle.header__item} ${appHeaderStyle.header__link} pb-4 pt-4 pl-5 pr-5`;
    const activeLink = `${appHeaderStyle.header__link_active} ${appHeaderStyle.header__item} ${appHeaderStyle.header__link} pb-4 pt-4 pl-5 pr-5`;

    const pendingText: string = 'text text_type_main-default text_color_inactive ml-2';
    const activeText: string = 'text text_type_main-default ml-2';

    return (
        <header className={appHeaderStyle.header}>
            <div className={`${appHeaderStyle.header__wrap} pb-4 pt-4`}>
                <nav className={appHeaderStyle.header__nav}>
                    <ul className={appHeaderStyle.header__list}>
                        <li>
                            <NavLink to={PATH.HOME} className={ ({ isActive }) => isActive ? activeLink : pendingLink }>
                                {({ isActive }) => (
                                    <>
                                    <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
                                    <p className={ isActive ? activeText : pendingText }>Конструктор</p>
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={PATH.FEED} className={ ({ isActive }) => isActive ? activeLink : pendingLink }>
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
                
                <NavLink to={PATH.PROFILE} className={ ({ isActive }) => isActive ? activeLink : pendingLink }>
                    {({ isActive }) => (
                        <>
                        <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
                        <p className={ isActive ? activeText : pendingText }>{!auth ? 'Личный кабинет' : name}</p>
                        </>
                    )}
                </NavLink>
            </div>
        </header>
        );
}

export default AppHeader;