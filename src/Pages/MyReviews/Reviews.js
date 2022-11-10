import React from 'react';

const Reviews = ({review, handleDelete}) => {
    const {_id, serviceName, details, image} = review;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full h-72' src={image} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {serviceName}
                    
                    </h2>
                    <p>Your Review: {details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-error" onClick={() => handleDelete(_id)}>Delete</button>
                        <button className="btn btn-outline btn-secondary">Edit Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;