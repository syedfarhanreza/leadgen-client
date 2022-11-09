import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const location = useLocation()
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-orange-600 mb-5'>Our Services</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
            {
                    location.pathname === '/' ?
                        (
                            services.slice(0, 3).map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        )
                        :
                        (
                            services.map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        )
                }
            </div>
        </div>
    );
};

export default Services;