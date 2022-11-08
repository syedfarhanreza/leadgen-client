import React from 'react';
import picture1 from '../../../assets/MyWorks/picture1.jpg'
import picture2 from '../../../assets/MyWorks/picture2.jpg'
import picture3 from '../../../assets/MyWorks/picture3.jpg'
import picture4 from '../../../assets/MyWorks/picture4.jpg'
import picture5 from '../../../assets/MyWorks/picture5.jpg'
import picture6 from '../../../assets/MyWorks/picture6.jpg'

const MyWorks = () => {
    return (
        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="card w-96 bg-base-100 shadow-xl rounded">
                <figure className="p-10 m-4 bg-white rounded">
                    <img src={picture1} alt="picture1" className="rounded-xl" />
                </figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="p-10 bg-white rounded">
                    <img src={picture2} alt="picture2" className="rounded-xl" />
                </figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="p-10 bg-white rounded">
                    <img src={picture3} alt="picture3" className="rounded-xl" />
                </figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="p-10 bg-white rounded">
                    <img src={picture4} alt="picture4" className="rounded-xl" />
                </figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="p-10 bg-white rounded">
                    <img src={picture5} alt="picture5" className="rounded-xl" />
                </figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="p-10 bg-white rounded">
                    <img src={picture6} alt="picture6" className="rounded-xl" />
                </figure>
            </div>
        </div>
    );
};

export default MyWorks;