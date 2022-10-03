import React from 'react';

import Portada from '../portada/Portada';
import bg from '../../images/GB SET.mp4';
import { AiOutlineYoutube } from 'react-icons/ai'

const Home = () => {
    return (
        <>
            <div className='relative bg-black'>
                <Portada />
                <video className='absolute top-0 left-0 right-0 resize-none hidden md:inline ml-auto mr-auto ' src={bg} muted={true} loop autoPlay></video>
            </div>
            <div className='bg-black relative'>
                <div className='container mx-auto'>
                    <div className='text-gray-300 flex items-center text-4xl font-black px-10'>
                        <AiOutlineYoutube />
                        <h1 className=''>Youtube</h1>
                    </div>

                </div>
            </div>
        </>

    );
};

export default Home;
