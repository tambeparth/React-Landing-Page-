import React from 'react';
import './Background.css';
import v1 from '../../assets/v1.mp4';
import r2 from '../../assets/r2.jpg'
import r3 from '../../assets/r3.jpg';
import r4 from '../../assets/r4.jpg';

const Background = ({ playStatus, heroCount }) => {
    if (playStatus) {
        return (
            <video className='background fade-in' autoPlay loop muted>
                <source src={v1} type='video/mp4' />
            </video>
        );
    } else if (heroCount === 0) {
        return <img src={r2} className='background fade-in' alt='' />;
    } else if (heroCount === 1) {
        return <img src={r3} className='background fade-in' alt='' />;
    } else if (heroCount === 2) {
        return <img src={r4} className='background fade-in' alt='' />;
    } else {

        return null;
    }
};

export default Background;
