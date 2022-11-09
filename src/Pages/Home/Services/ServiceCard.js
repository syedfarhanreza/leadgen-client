import React from 'react';

const ServiceCard = ({service}) => {
    const {image, price,name, details} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-72' src={image} alt="pictures" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{name}</h2>
                <p>{details}</p>
                <p className='font-semibold text-3xl'>Price: $ {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;