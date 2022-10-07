import React from 'react';
import Portada from '../portada/Portada';
import Youtube from '../youtube/Youtube';
import Releases from '../releases/Releases';
import Footer from '../footer/Footer';
import Spotify from '../spotify/Spotify';
import Touterdates from '../dates/Touterdates';

const Home = () => {
    return (
        <>
            <div className=''>
                <Portada />
            </div>
            <div className='h-fit bg-[#2B4865]'>
                <Releases/>
            </div>
            <div className='bg-black h-fit'>
                <Youtube />
            </div>
            <div className='h-fit bg-black'>
                <Spotify/>
            </div>
            <div className='h-fit bg-black'>
                <Touterdates/>
            </div>
            <div className='h-fit bg-black'>
                <Footer/>
            </div>
            
            
        </>

    );
};

export default Home;
