import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import MyWorks from '../MyWorks/MyWorks';
import Services from '../Services/Services';

const Home = () => {
    useTitle('LeadGen');
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <MyWorks></MyWorks>
        </div>
    );
};

export default Home;