import React from 'react';
import Portada from '../portada/Portada';
import Youtube from '../youtube/Youtube';
import Releases from '../releases/Releases';

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
            
        </>

    );
};

export default Home;
