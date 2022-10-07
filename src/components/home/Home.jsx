import React from 'react';
import Portada from '../portada/Portada';
import Youtube from '../youtube/Youtube';
import Releases from '../releases/Releases';
import Footer from '../footer/Footer';
import Spotify from '../spotify/Spotify';
import Touterdates from '../dates/Touterdates';
import bgreleases from '../../images/Manitox.png';
import camino from '../../images/camino.png';

const Home = () => {
    return (
        <>
            <div className=''>
                <Portada />
            </div>
            <div className='h-fit bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${bgreleases})` }}>
                <div className='bg-black opacity-80'>
                    <Releases />
                    <Spotify />
                </div>
            </div>
            
            <div className='h-fit bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${camino})` }}>
                <div className='bg-black opacity-60'>
                    
                </div>
            </div>
            <div className='h-fit bg-[#256D85] brightness-75'>
                <div className=''>
                    <Youtube />
                </div>
            </div>
            <div className='h-fit bg-black'>
                <Touterdates />
            </div>
            <div className='h-fit bg-black'>
                <Footer />
            </div>


        </>

    );
};

export default Home;
