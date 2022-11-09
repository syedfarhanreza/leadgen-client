import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id,image, price, serviceName, details } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><PhotoProvider>
                                <PhotoView src={image}>
                                    <img src={image} alt="Shoes" className="rounded-3xl " />
                                </PhotoView>
                            </PhotoProvider></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{serviceName}</h2>
                <p>{details}</p>
                <p className='font-semibold text-3xl'>Price: $ {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;