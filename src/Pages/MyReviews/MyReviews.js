import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Reviews from './Reviews';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);

    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])
    return (
        <div>
            <div className='grid lg:grid-cols-2 justify-items-center gap-10 my-20 lg:mx-48'>
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </div>
    );
};

export default MyReviews;