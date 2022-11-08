import React from 'react';
import image from '../../../assets/images/image01.jpg'
const AboutUs = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl m-20">
            <figure><img src={image} alt="model" /></figure>
            <div className="card-body">
                <h1 className="card-title text-red-600">About Us</h1>
                <p>All that we do is work on the style of life, on "being." The object as such is not very interesting. I wonder how people will live with him, what metamorphoses he will undergo in the house. I always liked very simple things. In all. Doing simple things is the most difficult thing. If we talk about simplicity, then it is a synthesis.</p>
                 <h4 className='text-center text-success'>- LeadGen Photography</h4>
            </div>
        </div>
    );
};

export default AboutUs;