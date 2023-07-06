import { Link } from 'react-router-dom';
import notFoundStyle from './not-found.module.css';
import { PATH } from '../../utils/api';
import astronaut from '../../images/space-astronaut.png';
import { AnimationFollowingMouse } from '../../components';

const NotFound404 = () => {

  return (
    <div className={notFoundStyle.wrapper} id='wrap'>
      <AnimationFollowingMouse />
      <div className={notFoundStyle.text}>
        <h1 className={`${notFoundStyle.title} text text_type_main-default`}>404</h1>
        <div className="text text_type_main-default">Страница не найдена</div>
        <Link to={PATH.HOME} className={`${notFoundStyle.link} text text_type_main-default`}>
          <button className={`${notFoundStyle.button} text text_type_main-default`}>Перейти на главную</button>
        </Link>
      </div>
      <div className={notFoundStyle.astronaut}>
        <img src={astronaut} alt="astronaut" />
      </div>
    </div>
  );
}

export default NotFound404;