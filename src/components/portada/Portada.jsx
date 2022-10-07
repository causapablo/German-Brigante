import React, { useState } from 'react';
import Menu from '../menu/Menu';

import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';
import Logo from '../../images/Logo.png'
import Mobile from '../mobile/Mobile';
import bg from '../../images/GB SET.mp4'

const Portada = () => {
    let [sound, setSound] = useState(true);
    const soundValue = (sound) => {
        let speaker = 'visible';
        if (sound) {
            speaker = 'hidden';
        }
        return speaker;
    };
    const handleOnClick = () => {
        setSound(!sound);
    }
    return (
        <div className='relative'>


            <video className='w-full h-full' src={bg} muted={true} loop autoPlay></video>




           
            <div className='absolute top-[10%] w-full md:hidden'>
                <Mobile />
            </div>
            <div className='absolute top-[40%] left-0 right-0 ml-auto mr-auto'>
                <img className='w-28 md:w-80 mx-auto' src={Logo} alt='Logo' />
            </div>
            <div className='md:absolute md:w-full md:bottom-[15%]'>
                <Menu />
            </div>
        </div>
    );
};

export default Portada;