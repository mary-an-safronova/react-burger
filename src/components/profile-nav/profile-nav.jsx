import ProfleNavStyle from './profile-nav.module.css';
import { NavLink } from 'react-router-dom';

const ProfileNav = () => {
    const pending = `${ProfleNavStyle.link} className="text text_type_main-medium text_color_inactive`;
    const active = `${ProfleNavStyle.link} ${ProfleNavStyle.main_link} text text_type_main-medium`;

    return (
        <nav className={`${ProfleNavStyle.nav} mr-15`}>
            <NavLink to="/profile" end className={ ({ isActive }) => isActive ? active : pending }>Профиль</NavLink>
            <NavLink to="/profile/orders" end className={ ({ isActive }) => isActive ? active : pending }>История заказов</NavLink>
            <NavLink to="/profile/orders/:id" end className={ ({ isActive }) => isActive ? active : pending }>Выход</NavLink>
            <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете изменить свои персональные данные</p>
        </nav>
    )
}

export default ProfileNav;