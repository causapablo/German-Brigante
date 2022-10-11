import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsSpotify } from 'react-icons/bs';
import { GrSoundcloud } from 'react-icons/gr';
import { IoMdArrowDropright} from 'react-icons/io';
import { VscCalendar } from 'react-icons/vsc';

const MobileTop = () => {
    return (
        <section className='overflow-hidden'>
            <div className='w-full'>

                <div className='md:hidden flex w-full group'>
                    <div className='flex group-hover:pause whitespace-nowrap animate-scrolling animation-delay-4 text-gray-300'>
                        <a href="mailto:Will.htartists@gmail.com"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300' ><AiOutlineMail className='mr-2' />BOOKING<IoMdArrowDropright className='' /></button></a>
                        <a href="https://www.google.com.ar" target="_blank" rel="noreferrer"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><VscCalendar className='mr-2' />TOUR DATES<IoMdArrowDropright className=' ' /></button></a>
                        <a href="https://open.spotify.com/artist/2h7fN6KOZVgWQ39sYK0jJm?si=ywM_eU5jQxCaTQXhAPna7A" target="_blank" rel="noreferrer"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsSpotify className='mr-2' />SPOTIFY<IoMdArrowDropright className=' ' /></button></a>
                        <a href="https://soundcloud.com/german-brigante" target="_blank" rel="noreferrer"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><GrSoundcloud className='mr-2' />SOUNDCLOUD<IoMdArrowDropright className='' /></button></a>
                    </div>
                    <div className='flex group-hover:pause whitespace-nowrap animate-scrolling2 animation-delay-2 text-gray-300'>
                        <a href="mailto:Will.htartists@gmail.com"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300' ><AiOutlineMail className='mr-2' />BOOKING<IoMdArrowDropright className='' /></button></a>
                        <a href="https://www.google.com.ar" target="_blank" rel="noreferrer"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><VscCalendar className='mr-2' />TOUR DATES<IoMdArrowDropright className=' ' /></button></a>
                        <a href="https://open.spotify.com/artist/2h7fN6KOZVgWQ39sYK0jJm?si=ywM_eU5jQxCaTQXhAPna7A" target="_blank" rel="noreferrer"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsSpotify className='mr-2' />SPOTIFY<IoMdArrowDropright className=' ' /></button></a>
                        <a href="https://soundcloud.com/german-brigante" target="_blank" rel="noreferrer"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><GrSoundcloud className='mr-2' />SOUNDCLOUD<IoMdArrowDropright className='' /></button></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileTop;