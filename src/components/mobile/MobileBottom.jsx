import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { BsApple, BsYoutube } from 'react-icons/bs';
import { IoMdArrowDropright } from 'react-icons/io';
import { SiBeatport } from 'react-icons/si';

const MobileBottom = () => {
    return (
        <section className='overflow-hidden'>
            <div className='w-full'>                
                <div className=''>
                    <div className='md:hidden flex w-full group'>
                        <div className='flex group-hover:pause whitespace-nowrap animate-scrolling animation-delay-4 text-gray-300'>
                            <a href="https://www.beatport.com/artist/german-brigante/128913" target="_blank" rel="noreferrer"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><SiBeatport className='mr-2' />BEATPORT<IoMdArrowDropright className=' ' /></button></a>
                            <a href="https://music.apple.com/us/artist/german-brigante/362418980" target="_blank" rel="noreferrer"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsApple className='mr-2' />APPLE MUSIC<IoMdArrowDropright className=' ' /></button></a>
                            <a href="https://www.youtube.com/channel/UCMYdbWdVIKF6roLCLyjOU4Q/videos" target="_blank" rel="noreferrer"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsYoutube className='mr-2' />YOUTUBE<IoMdArrowDropright className=' ' /></button></a>
                            <a href="https://www.facebook.com/germanbrigantemusic" target="_blank" rel="noreferrer"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><AiFillFacebook className='mr-2' />FACEBOOK<IoMdArrowDropright className=' ' /></button></a>
                        </div>
                        <div className='flex group-hover:pause whitespace-nowrap animate-scrolling2 animation-delay-2 text-gray-300'>
                            <a href="https://www.beatport.com/artist/german-brigante/128913" target="_blank" rel="noreferrer"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><SiBeatport className='mr-2' />BEATPORT<IoMdArrowDropright className=' ' /></button></a>
                            <a href="https://music.apple.com/us/artist/german-brigante/362418980" target="_blank" rel="noreferrer"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsApple className='mr-2' />APPLE MUSIC<IoMdArrowDropright className=' ' /></button></a>
                            <a href="https://www.youtube.com/channel/UCMYdbWdVIKF6roLCLyjOU4Q/videos" target="_blank" rel="noreferrer"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><BsYoutube className='mr-2' />YOUTUBE<IoMdArrowDropright className=' ' /></button></a>
                            <a href="https://www.facebook.com/germanbrigantemusic" target="_blank" rel="noreferrer"><button className='w-full px-4 space-x-1 flex justify-between items-center font-extrabold bg-[#064635] bg-opacity-30 md:text-gray-300  hover:shadow-md hover:bg-[#C21010] hover:bg-opacity-10 hover:border-2 hover:border-[#C21010] hover:duration-300'><AiFillFacebook className='mr-2' />FACEBOOK<IoMdArrowDropright className=' ' /></button></a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MobileBottom;