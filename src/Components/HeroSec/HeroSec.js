import React from 'react';
import './HeroSec.css'

const HeroSec = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hero-text">
                            <p>
                                Start with our picks for the best headphones below. These are the ones we recommend based on our testing and in-depth headphones reviews.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="hero-img">
                            <img className='img-fluid' src="https://i.ibb.co/FnSrVb7/headphones.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSec;