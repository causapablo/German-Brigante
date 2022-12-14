import React from 'react';
import Menu from '../menu/Menu';

import MobileTop from '../mobile/MobileTop';
import MobileBottom from '../mobile/MobileBottom';
import Logo from '../../images/Logo.png';

import bg from '../../images/GB SET.mp4'

const Portada = () => {

    return (
        <div className='relative'>

            
            <video autoPlay playsInline className='w-screen h-full' src={bg} muted={true} loop ></video>
            <div className='absolute top-[5%] w-full md:hidden'>
                <MobileTop/>
            </div>
            <div className='absolute bottom-1 w-full md:hidden'>
                <MobileBottom/>
            </div>




            <div className='absolute top-[40%] left-0 right-0 ml-auto mr-auto'>
                <img className='w-28 md:w-80 mx-auto' src={Logo} alt='Logo' />
            </div>
            <div className='md:absolute md:w-full md:bottom-[18%]'>
                <Menu />
            </div>
        </div>
    );
};

export default Portada;