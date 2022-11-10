import React from 'react';
import { Link } from 'react-router-dom';
import img404 from '../../assets/404/404.jpg'
const WrongRoute = () => {
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={img404} alt="WrongRoute" /></figure>
            <div className="card-body w-3/4 mx-auto text-center">
                <p className=" font-bold text-4xl text-blue-600">Page Not Found</p>
                <p className='text-2xl'>You can search for the page you want here or return to the homepage</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary"><Link to='/'>GO HOME</Link></button>
                </div>
            </div>
        </div>
    );
};

export default WrongRoute;