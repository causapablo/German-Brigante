import React from 'react';

import Portada from '../portada/Portada';
import bg from '../../images/GB SET.mp4';
import gif from '../../images/GBGif.gif';
import Youtube from '../youtube/Youtube';

const Home = () => {
    return (
        <>
            <div className='relative bg-black'>
                <Portada />
                <video className='absolute top-0 bottom-0 mt-auto mb-auto left-0 right-0 ml-auto mr-auto resize-none hidden md:inline' src={bg} muted={true} loop autoPlay></video>
                <img className='absolute top-24 left-0 right-0 ml-auto mr-auto resize-none md:hidden' src={gif} alt="GB Gif" />
            </div>
            <div className='bg-black relative'>
                <Youtube/>
            </div>
        </>

    );
};

export default Home;
