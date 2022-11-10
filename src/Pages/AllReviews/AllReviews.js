import React from 'react';

const AllReviews = ({review}) => {
    const { serviceName, details, image,reviewer} = review;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full h-72' src={image} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {serviceName}
                    </h2>

                    <p>{reviewer}'s Review: {details}</p>
                </div>
            </div>
        </div>
    );
};

export default AllReviews;