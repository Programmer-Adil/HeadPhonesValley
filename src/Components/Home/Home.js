import React from 'react';
import HeroSec from '../HeroSec/HeroSec';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className='container'>
            <HeroSec></HeroSec>
            <Review></Review>
        </div>
    );
};

export default Home;