import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai'
const Youtube = () => {
    return (
        <div className='container mx-auto py-10 h-fit'>
            <div className='text-gray-300 flex items-center text-4xl font-extrabold px-10'>
                <AiOutlineYoutube />
                <h1 className='ml-2'>Youtube</h1>
            </div>
            <div className='px-5 py-5 md:px-0'>
                <div className='container bg-white mx-auto h-[1px]'></div>
            </div>
            <div className='grid grid-cols-1 justify-items-center lg:grid-cols-2 gap-3'>
                <iframe className='h-[300px] lg:w-full lg:h-[500px]' src="https://www.youtube.com/embed/MPhOFyFA3Yw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className='h-[300px] lg:w-full lg:h-[500px]' src="https://www.youtube.com/embed/Y1oHYgaCRHI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>


        </div>
    );
};

export default Youtube;