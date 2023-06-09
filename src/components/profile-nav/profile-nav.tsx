import { useDispatch } from '../../services/hooks';
import profleNavStyle from './profile-nav.module.css';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { logoutUser } from '../../services/actions/auth';
import { PATH } from '../../utils/api';

const ProfileNav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const pending = `${profleNavStyle.link} text text_type_main-medium text_color_inactive`;
    const active = `${profleNavStyle.link} ${profleNavStyle.main_link} text text_type_main-medium`;

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate(PATH.LOGIN, { replace: true });
    }

    return (
        <nav className={`${profleNavStyle.nav} mr-15 mt-30`}>
            <NavLink to={PATH.PROFILE} end className={ ({ isActive }) => isActive ? active : pending }>Профиль</NavLink>
            <NavLink to={PATH.PROFILE_ORDERS} end className={ ({ isActive }) => isActive ? active : pending }>История заказов</NavLink>
            <button className={`${profleNavStyle.button} text text_type_main-medium text_color_inactive`} onClick={handleLogout}>Выход</button>
            {
                location.pathname === '/profile' 
                    ? <p className={`${profleNavStyle.span} text text_type_main-default text_color_inactive pt-15`}>В этом разделе вы можете изменить свои персональные данные</p>
                    : <p className={`text text_type_main-default text_color_inactive pt-15`}>В этом разделе вы можете просмотреть свою историю заказов</p>
            }
        </nav>
    )
}

export default ProfileNav;