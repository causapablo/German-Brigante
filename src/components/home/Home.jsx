import React from 'react';
import Portada from '../portada/Portada';
import Youtube from '../youtube/Youtube';
import Releases from '../releases/Releases';
import Footer from '../footer/Footer';
import Spotify from '../spotify/Spotify';
import Touterdates from '../dates/Touterdates';
import bgreleases from '../../images/Manitox.png';
import selectas from '../../images/selectas.png';
import Soundcloud from '../soundcloud/Soundcloud';
import yamil from '../../images/yamil.png'
import Manitox from '../manitox/Manitox';

const Home = () => {
    return (
        <>
            <div className='bg-black'>
                <div className='h-full w-full bg-black'>
                    <Portada />
                </div>
                <div className='h-full bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: `url(${bgreleases})` }}>
                    <div className='bg-black opacity-80 h-full '>
                        <Releases />
                        <Spotify />
                    </div>
                </div>
                <div className='h-full bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${yamil})` }}>
                    <div className='bg-black opacity-90 h-full'>
                        <Soundcloud />
                        <Youtube />
                    </div>
                </div>
                <div className='h-full bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${selectas})` }}>
                    <div className='bg-black opacity-80 py-12'>
                        <Manitox/>
                    </div>
                </div>
                <div className='h-fit hidden bg-black'>
                    <Touterdates />
                </div>
                <div className='h-full bg-black'>
                    <Footer />
                </div>
            </div>


        </>

    );
};

export default Home;
