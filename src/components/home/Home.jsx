import React from 'react';

import Portada from '../portada/Portada';
import bg from '../../images/GB SET.mp4';


const Home = () => {
    return (
        <>
        <div className=' h-screen relative bg-black'>
            
            <Portada/>
            <video className='absolute top-0 left-0 resize-none hidden md:inline w-screen' src={bg} muted={true} loop autoPlay></video>
        </div>
        </>
        
    );
};

export default Home;
