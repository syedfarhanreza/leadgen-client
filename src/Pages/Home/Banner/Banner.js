import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/images/banner.jpg'
const Banner = () => {
    return (
        <div className="card w-full h-screen shadow-xl image-full">
            <figure><img src={banner} alt="banner" /></figure>
            <div className="card-body items-center text-center pt-48">
                <h1 className="card-title text-7xl">Only photograph <br/>
                    what you love.</h1>
                    <hr className='border w-2/6 mt-5' />
                <p className='text-xl w-3/6'>Photography is a kind of visual literature. When you shoot, you do something meaningful: you build a frame, turn something into it, remove something.</p>
                <div className="card-actions">
                    <Link >Facebook</Link>
                    <Link>Twitter</Link>
                    <Link>Instagram</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;