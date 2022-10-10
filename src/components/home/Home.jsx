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

const Home = () => {
    return (
        <>
            <div className=''>
                <Portada />
            </div>
            <div className='h-fit bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: `url(${bgreleases})` }}>
                <div className='bg-black opacity-80 py-12 '>
                    <Releases />
                    <Spotify />
                </div>
            </div>
            <div className='h-fit bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${yamil})` }}>
                <div className='bg-black opacity-90 py-12'>
                    <Soundcloud />

                </div>
            </div>
            <div className='h-fit bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${selectas})` }}>
                <div className='bg-black opacity-80 py-12'>
                    <Youtube />
                </div>
            </div>
            <div className='h-fit hidden bg-black'>
                <Touterdates />
            </div>
            <div className='h-fit bg-black'>
                <Footer />
            </div>


        </>

    );
};

export default Home;
