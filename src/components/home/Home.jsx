import React from 'react';

import Portada from '../portada/Portada';
import bg from '../../images/GB SET.mp4';


const Home = () => {
    return (
        <>
        <div className='relative bg-black'>
            <Portada/>
            <video className='absolute top-0 left-0 right-0 resize-none hidden md:inline ml-auto mr-auto ' src={bg} muted={true} loop autoPlay></video>
        </div>
        <div className='h-24 bg-green-900 relative'>

        </div>
        </>
        
    );
};

export default Home;
