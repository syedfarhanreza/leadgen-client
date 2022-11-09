import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('services.json')
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
                    services.map(service => <ServiceCard
                        key={service.id}
                        service ={service}
                    ></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;