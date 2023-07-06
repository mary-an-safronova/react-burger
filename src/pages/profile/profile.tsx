import ProfleStyle from './profile.module.css';
import { ProfileNav } from '../../components'
import { Outlet } from 'react-router-dom';

const Profile = () => {

    return (
        <section className={ProfleStyle.wrapper}>
            <ProfileNav />
            <Outlet />
        </section>
    )
}

export default Profile;