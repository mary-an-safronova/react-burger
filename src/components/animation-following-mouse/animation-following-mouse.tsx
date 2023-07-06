import animationFollowingMouseStyle from './animation-following-mouse.module.css';
import { ReactNode } from 'react';

const AnimationFollowingMouse = () => {
    const spans: ReadonlyArray<ReactNode> = Array.from({ length: 2000 }, (_, i) => <span key={i}></span>);

    return (
        <div className={animationFollowingMouseStyle.animateWrapper}>
            {spans}
        </div>
    )
}

export default AnimationFollowingMouse;