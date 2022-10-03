import React from 'react';

import Portada from '../portada/Portada';
import bg from '../../images/GB SET.mp4';
import brigante from '../../images/PanoramicBlackWhite.jpg'

const Home = () => {
    return (
        <>
        <div className=' h-screen relative'>
            
            <Portada/>
            <video className='absolute top-0 left-0 resize-none hidden md:inline w-screen' src={bg} muted={true} loop autoPlay></video>
        </div>
        </>
        
    );
};

export default Home;
{/* <div className="w-full h-full bg-no-repeat md:hidden absolute bg-cover" style={{backgroundImage : `url(${brigante})`}}>
</div> */}