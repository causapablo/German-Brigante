import React from 'react';
import {BsSpotify, BsApple, BsYoutube, BsInstagram, BsFacebook} from 'react-icons/bs';
import {SiBeatport} from 'react-icons/si';
import {GrSoundcloud} from 'react-icons/gr';

const Footer = () => {
    return (
        <div className='font-Montserrat text-gray-300 text-xl text-center'>
            <h1 className='pt-5 text-[10px] md:text-[12px]'>© 2022 German Brigante. All Right Reserved.</h1>
            <div className='container mx-auto flex justify-center space-x-3 md:space-x-10 py-5'>
                <BsSpotify/>
                <SiBeatport/>
                <BsApple/>
                <GrSoundcloud/>
                <BsYoutube/>
                <BsInstagram/>
                <BsFacebook/>
            </div>
            
            <div className='h-[1px] bg-white container mx-auto w-1/2'>

            </div>
            <h1 className='text-[8px] md:text-[10px]'>Designed by Augustus Pablo</h1>
        </div>
    );
};

export default Footer;