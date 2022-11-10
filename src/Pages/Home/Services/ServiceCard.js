import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, image, price, serviceName, details } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div>
                <PhotoProvider>
                    <PhotoView src={image}>
                    <img src={image} alt="pic" className="rounded-3xl w-full h-72 " />
                    </PhotoView>
                </PhotoProvider>
            </div>
            
            <div className="card-body">
                <h2 className="card-title text-3xl">{serviceName}</h2>
                <p>
                    {
                        details?.length > 100 ?
                            <>
                                {details.slice(0, 150) + ' ......'}
                            </>
                            :
                            <>
                                {details}
                            </>

                    }

                </p>
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