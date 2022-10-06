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

            <video className=' mx-auto' src={bg} muted={true} loop autoPlay></video>

            <div className='hidden md:flex justify-end relative'>
                <GiSpeaker className='absolute text-white font-extrabold text-3xl right-36' visibility={soundValue(sound)} onClick={handleOnClick} />
                <GiSpeakerOff className='absolute text-white font-extrabold text-3xl right-36' visibility={soundValue(!sound)} onClick={handleOnClick} />
            </div>
            <div className='absolute top-[10%] w-full md:hidden'>
                <Mobile />
            </div>
            <div className='absolute top-[40%] left-0 right-0 ml-auto mr-auto'>
                <img className='w-16 md:w-80 mx-auto' src={Logo} alt='Logo' />
            </div>
            <div className='md:absolute md:w-full md:bottom-[15%]'>
                <Menu />
            </div>
        </div>
    );
};

export default Portada;