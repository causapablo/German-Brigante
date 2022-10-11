import React from 'react';
import { BsSpotify } from 'react-icons/bs';
import { GrSoundcloud } from 'react-icons/gr';
import { RiRecordMailLine } from 'react-icons/ri';
import { SiBeatport } from 'react-icons/si';
import logo from '../../images/ManitoxLogo.png';
const Manitox = () => {
    return (
        <div className='container mx-auto py-10 h-fit'>
            <div className='text-gray-300 flex items-center text-4xl font-extrabold px-10'>
                <RiRecordMailLine />
                <h1 className='ml-2'>Manitox Record Label</h1>
            </div>
            <div className='px-5 py-5 md:px-0'>
                <div className='container bg-white mx-auto h-[1px]'></div>
            </div>
            <div className=''>
                <p className='text-gray-300 px-2'>
                    German Brigante has reached a total freedom in terms of creation. The main result of this is his own record label, Manitox. A place conceived since its inception as the ideal platform, where not only is it shown in the most personal way possible, with productions such as 'Marimba'. This is also the place where he is giving the opportunity to newcomers to show their skills. Artists,  in addition to already established names, that we will surely hear about them in the future.
                </p>
            </div>
            <div className='py-5'>
                <img className='mx-auto' src={logo} alt="Manitox Logo" />
            </div>
            <div className='flex text-5xl sm:text-9xl justify-around py-4'>
                <a href="https://www.beatport.com/label/manitox/64329" target="_blank" rel="noreferrer"><SiBeatport className='text-[#01FF95]'/></a>
                <a href="https://soundcloud.com/manitoxlabel" target="_blank" rel="noreferrer"><GrSoundcloud className='text-[#ff8800]'/></a>
                
                <a href="https://open.spotify.com/artist/5x7ysZK2PjwOeCM6MtjPPF?si=KTYI8DYbRfewwNW9lRI--g" target="_blank" rel="noreferrer"><BsSpotify className='text-[#38E54D]'/></a>

            </div>


        </div>
    );
};

export default Manitox;