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
        <section className='overflow-hidden group md:mt-0'>
            <div className='md:flex md:w-full md:group'>
                <div className='hidden md:flex group-hover:pause md:whitespace-nowrap md:animate-scrolling md:animation-delay-4'>
                    <a href="mailto:mgmt.brigante@gmail.com"><button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300' ><AiOutlineMail className='mr-5 mt-1' />BOOKING<IoMdArrowDropright className='mt-1' /></button></a>
                    <a href="http://www.google.com.ar" target="_blank" rel="noreferrer"><button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><VscCalendar className='mr-5 mt-1' />TOUR DATES<IoMdArrowDropright className=' mt-1' /></button></a>
                    <a href="https://open.spotify.com/artist/2h7fN6KOZVgWQ39sYK0jJm?si=ywM_eU5jQxCaTQXhAPna7A" target="_blank" rel="noreferrer"><button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsSpotify className='mr-5 mt-1' />SPOTIFY<IoMdArrowDropright className=' mt-1' /></button></a>
                    <a href="https://soundcloud.com/german-brigante" target="_blank" rel="noreferrer"><button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><GrSoundcloud className='mr-5 mt-1' />SOUNDCLOUD<IoMdArrowDropright className='' /></button></a>
                    <a href="https://www.beatport.com/artist/german-brigante/128913" target="_blank" rel="noreferrer"><button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><SiBeatport className='mr-5 mt-1' />BEATPORT<IoMdArrowDropright className=' mt-1' /></button></a>
                    <a href="https://music.apple.com/us/artist/german-brigante/362418980" target="_blank" rel="noreferrer"><button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsApple className='mr-5 mt-1' />APPLE MUSIC<IoMdArrowDropright className=' mt-1' /></button></a>
                    <a href="https://www.youtube.com/channel/UCMYdbWdVIKF6roLCLyjOU4Q/videos" target="_blank" rel="noreferrer"><button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsYoutube className='mr-5 mt-1' />YOUTUBE<IoMdArrowDropright className=' mt-1' /></button></a>
                    <a href="https://www.facebook.com/germanbrigantemusic" target="_blank" rel="noreferrer"><button className='w-full space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><AiFillFacebook className='mr-5 mt-1' />FACEBOOK<IoMdArrowDropright className=' mt-1' /></button></a>
                </div>
                <div className='hidden md:flex group-hover:pause md:whitespace-nowrap md:animate-scrolling2 md:animation-delay-2'>
                    <a href="mailto:mgmt.brigante@gmail.com"><button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><AiOutlineMail className='mr-5 mt-1' />BOOKING<IoMdArrowDropright className=' mt-1' /></button></a>
                    <a href="http://www.google.com.ar" target="_blank" rel="noreferrer"><button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><VscCalendar className='mr-5 mt-1' />TOUR DATES<IoMdArrowDropright className=' mt-1' /></button></a>
                    <a href="https://open.spotify.com/artist/2h7fN6KOZVgWQ39sYK0jJm?si=ywM_eU5jQxCaTQXhAPna7A" target="_blank" rel="noreferrer"><button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsSpotify className='mr-5 mt-1' />SPOTIFY<IoMdArrowDropright className=' mt-1' /></button></a>
                    <a href="https://soundcloud.com/german-brigante" target="_blank" rel="noreferrer"><button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><GrSoundcloud className='mr-5 mt-1' />SOUNDCLOUD<IoMdArrowDropright className=' mt-1' /></button></a>
                    <a href="https://www.beatport.com/artist/german-brigante/128913" target="_blank" rel="noreferrer"><button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><SiBeatport className='mr-5 mt-1' />BEATPORT<IoMdArrowDropright className=' mt-1' /></button></a>
                    <a href="https://music.apple.com/us/artist/german-brigante/362418980" target="_blank" rel="noreferrer"><button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsApple className='mr-5 mt-1' />APPLE MUSIC<IoMdArrowDropright className=' mt-1' /></button></a>
                    <a href="https://www.youtube.com/channel/UCMYdbWdVIKF6roLCLyjOU4Q/videos" target="_blank" rel="noreferrer"><button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsYoutube className='mr-5 mt-1' />YOUTUBE<IoMdArrowDropright className=' mt-1' /></button></a>
                    <a href="https://www.facebook.com/germanbrigantemusic" target="_blank" rel="noreferrer"><button className='space-x-5 flex justify-between items-center h-16 px-8 text-3xl font-extrabold bg-[#064635] bg-opacity-30 text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><AiFillFacebook className='mr-5 mt-1' />FACEBOOK<IoMdArrowDropright className=' mt-1' /></button></a>
                </div>
            </div>
        </section>
    );
};

export default Menu;