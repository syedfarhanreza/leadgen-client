import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewForm from './ReviewForm/ReviewForm';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { serviceName, details, price, image } = service;
    const moreImage = service.more_images;
    console.log(service)
    return (
        <div>
            <section>
                <section className='m-28'>

                    <div className="lg:flex justify-evenly text-white shadow-2xl p-10">

                        <div className="lg:w-1/2">
                            <PhotoProvider>
                                <PhotoView src={image}>
                                    <img src={image} alt="pic" className="rounded-3xl " />
                                </PhotoView>
                            </PhotoProvider>
                            <p className='text-center text-2xl mt-8'>PRICE: ${price}</p>
                        </div>

                        <div className="lg:w-1/2">
                            <h1 className='text-center text-3xl'>{serviceName}</h1>
                            <p className='m-5 text-justify'>{details}</p>
                        </div>

                    </div>

                    <div className='my-20'>
                        <h1 className='text-5xl text-center m-10 font-black'>More Photos</h1>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>

                            <img className='h-full' src={moreImage?.img1} alt="" />
                            <img className='h-full' src={moreImage?.img2} alt="" />
                            <img className='h-full' src={moreImage?.img3} alt="" />
                            <img className='h-full' src={moreImage?.img4} alt="" />
                            <img className='h-full' src={moreImage?.img5} alt="" />
                            <img className='h-full' src={moreImage?.img6} alt="" />

                        </div>
                    </div>

                </section>
            </section>
            <section>

                {
                    user?.email ?
                        <ReviewForm></ReviewForm>
                        :
                        <div className='justify-center pl-20 justify-items-center w-1/2 mx-auto mt-5 mb-10'>
                            <p className='text-red-600 text-xl mb-2'>To add your review, you need to <button className="btn btn-active btn-primary"><Link to='/login'>Login !!!</Link></button></p>
                            
                        </div>
                }
            </section>
        </div>
    );
};

export default ServiceDetails;