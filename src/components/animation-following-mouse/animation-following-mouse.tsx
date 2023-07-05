import animationFollowingMouseStyle from './animation-following-mouse.module.css';

const AnimationFollowingMouse = () => {
    const spans = Array.from({ length: 2000 }, (_, i) => <span key={i}></span>);

    return (
        <div className={animationFollowingMouseStyle.animateWrapper}>
            {spans}
        </div>
    )
}

export default AnimationFollowingMouse;