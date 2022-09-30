import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import { VscCalendar } from 'react-icons/vsc';
import { AiOutlineMail } from 'react-icons/ai'
import { BsSpotify, BsApple, BsYoutube } from 'react-icons/bs';
import { SiBeatport } from 'react-icons/si';
import { AiFillFacebook } from 'react-icons/ai';
import { GrSoundcloud } from 'react-icons/gr';

const Menu = () => {
    return (
        <section className='relative overflow-hidden bg-black'>
            <div className='flex w-full group relative'>
                <div className='mx-auto space-y-4 md:space-y-0 md:flex group-hover:pause whitespace-nowrap md:animate-scrolling md:animation-delay-4'>
                    <button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300' ><AiOutlineMail className='mr-5 mt-1'/>BOOKING<IoMdArrowDropright className='mt-1' /></button>
                    <button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><VscCalendar className='mr-5 mt-1'/>TOUR DATES<IoMdArrowDropright className=' mt-1' /></button>
                    <button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsSpotify className='mr-5 mt-1'/>SPOTIFY<IoMdArrowDropright className=' mt-1' /></button>
                    <button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><GrSoundcloud className='mr-5 mt-1'/>SOUNDCLOUD<IoMdArrowDropright className='' /></button>
                    <button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><SiBeatport className='mr-5 mt-1'/>BEATPORT<IoMdArrowDropright className=' mt-1' /></button>
                    <button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsApple className='mr-5 mt-1'/>APPLE MUSIC<IoMdArrowDropright className=' mt-1' /></button>
                    <button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsYoutube className='mr-5 mt-1'/>YOUTUBE<IoMdArrowDropright className=' mt-1' /></button>
                    <button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><AiFillFacebook className='mr-5 mt-1'/>FACEBOOK<IoMdArrowDropright className=' mt-1' /></button>
                </div>
                <div className='hidden md:flex md:group-hover:pause md:whitespace-nowrap md:animate-scrolling2 md:animation-delay-2'>
                    <button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><AiOutlineMail className='mr-5 mt-1'/>BOOKING<IoMdArrowDropright className=' mt-1' /></button>
                    <button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><VscCalendar className='mr-5 mt-1'/>TOUR DATES<IoMdArrowDropright className=' mt-1' /></button>
                    <button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsSpotify className='mr-5 mt-1'/>SPOTIFY<IoMdArrowDropright className=' mt-1' /></button>
                    <button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><GrSoundcloud className='mr-5 mt-1'/>SOUNDCLOUD<IoMdArrowDropright className=' mt-1' /></button>
                    <button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><SiBeatport className='mr-5 mt-1'/>BEATPORT<IoMdArrowDropright className=' mt-1' /></button>
                    <button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsApple className='mr-5 mt-1'/>APPLE MUSIC<IoMdArrowDropright className=' mt-1' /></button>
                    <button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsYoutube className='mr-5 mt-1'/>YOUTUBE<IoMdArrowDropright className=' mt-1' /></button>
                    <button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-black bg-opacity-90 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><AiFillFacebook className='mr-5 mt-1'/>FACEBOOK<IoMdArrowDropright className=' mt-1' /></button>
                </div>
            </div>
        </section>
    );
};

export default Menu;