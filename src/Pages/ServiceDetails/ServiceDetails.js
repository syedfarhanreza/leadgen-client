import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewForm from './ReviewForm/ReviewForm';


const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    const {serviceName, details, price, image} = service;
    const { img1, img2, img3, img4, img5, img6 } = service.more_images;
    console.log(service)
    return (
        <div>
            <section>
                service
            </section>
            <section>
                
                    {
                        user?.email ?
                        <ReviewForm></ReviewForm>
                        :
                        <>
                            <Link to='/login'>Login Here</Link>
                        </>
                    }
            </section>
        </div>
    );
};

export default ServiceDetails;