import React from 'react';
import Portada from '../portada/Portada';
import Youtube from '../youtube/Youtube';
import Releases from '../releases/Releases';
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <>
            <div className='bg-black'>
                <Portada />
            </div>
            <div className='h-fit bg-black'>
                <Releases/>
            </div>
            <div className='bg-black h-fit'>
                <Youtube />
            </div>
            <div className='h-fit bg-black'>
                <Footer/>
            </div>
            
        </>

    );
};

export default Home;
