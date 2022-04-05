import React, { useState, useEffect } from 'react';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);


    return (
        <div className='container'>
            <h1 className='text-center my-5'>Customer Review ({reviews.length})</h1>
            <div className="row">
                {
                    reviews.map((reviews) => (
                        <div className="col-md-4">
                            <div className="review-card">
                                <img className='img-fluid' src={reviews.img} alt="" />
                                <h4>Name:{reviews.name}</h4>
                                <h5 className='ratings'>Rating: {reviews.ratings}</h5>
                                <p>{reviews.comment}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="d-flex justify-content-center mb-3"><button className='mybtn'>See More</button></div>
        </div>
    );
};

export default Review;