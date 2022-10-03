import React, { useState } from 'react';
import Menu from '../menu/Menu';
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';
import Logo from '../../images/Logo.png'

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
        <div className='relative h-screen md:z-10 pt-36 '>

            <div className='hidden md:flex justify-end relative'>
                <GiSpeaker className='absolute text-white font-extrabold text-3xl right-20' visibility={soundValue(sound)} onClick={handleOnClick} />
                <GiSpeakerOff className='absolute text-white font-extrabold text-3xl right-20' visibility={soundValue(!sound)} onClick={handleOnClick} />
            </div>
            <div className='relative'>
                <img className='mx-auto md:mt-52' src={Logo} alt='Logo' />
                <div className='rounded-md animate-ping-slow  w-fit mt-16 pl-4 md:w-fit mx-auto md: md:absolute md:z-10 md:[writing-mode:vertical-lr] md:cursor-pointer md:pt-5 md:top-0 md:right-0 md:px-1 text-[#F1BF00] text-center font-black tracking-[20px] text-2xl hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010]'>
                    Releases
                </div>
            </div>
            <div className='md:absolute md:w-full md:bottom-20'>
                <Menu />
            </div>


        </div>
    );
};

export default Portada;