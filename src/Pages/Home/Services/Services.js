import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTitle('LeadGen-Services');
    const [services, setServices] = useState([]);
    const {loading} = useContext(AuthContext);
    const location = useLocation()
    useEffect( () => {
        fetch('https://leadgen-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    if(loading){
        return <div className='justify-center pl-28 justify-items-center w-1/4 mx-auto mt-10 mb-10'>
            <button className="btn loading">loading</button>
        </div>
    }
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-orange-600 mb-5'>Our Services</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
            {
                    location.pathname === '/' ?
                        (
                            [...services].reverse().slice(0, 3).map(service => <ServiceCard
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
            {
                    location.pathname === '/' ?
                        
                    <div className='justify-center pl-28 justify-items-center w-1/4 mx-auto mt-10'>
                    <button className='btn btn-accent'><Link to='/services'>See All Services</Link></button>
                    </div>
                        
                        :
                    <>
                    </>
                }
        </div>
    );
};

export default Services;