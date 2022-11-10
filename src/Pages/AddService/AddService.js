import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    const navigate = useNavigate();

    useTitle('AddReview');

    const { user } = useContext(AuthContext);

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const price = `${form.price.value}`;
        const image = `${form.image.value}`;
        const details = `${form.details.value}`;

        const review = {
            serviceName: name,
            image,
            details,
            price
        }

        fetch('https://leadgen-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Service Added');
                    form.reset();
                    navigate('/services');
                }
            })
            .catch(e => console.error(e))

    }

    return (
        <div>
            <div className='bg-gray-900 m-12 p-12 lg:mx-80 rounded-3xl shadow-2xl shadow-indigo-400/20'>
                <h1 className='text-white text-center font-black text-3xl my-5'>ADD SERVICE</h1>
                <form onSubmit={handleAddService} className="space-y-4 md:space-y-6 px-20 py-12">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Service Name</label>
                        <input type="text" name="name" id="name" className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Name" required="" />
                    </div>
                    <div>
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-white">Service banner</label>
                        <input type="link" name="image" id="image" className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Image Link" required="" />
                    </div>
                    <div>
                        <label htmlFor="details" className="block mb-2 text-sm font-medium text-white">Service Details</label>
                        <input type="text" name="details" id="details" className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="details" required="" />
                    </div>

                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-white">Price</label>
                        <input type="text" name="price" id="price" className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="price" required="" />
                    </div>

                    <input type="submit" className="w-full bg-gray-500 text-black font-extrabold hover:text-white hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center" value="Add Service" />

                </form>
            </div>
        </div>
    );
};

export default AddService;