import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai'
const Youtube = () => {
    return (
        <div className='container mx-auto py-10 h-fit bg-black'>
            <div className='text-gray-300 flex items-center text-4xl font-extrabold px-10'>
                <AiOutlineYoutube />
                <h1 className='ml-2'>Youtube</h1>
            </div>
            <div className='px-5 py-5 md:px-0'>
                <div className='container bg-white mx-auto h-[1px]'></div>
            </div>
            <div className='grid justify-items-center md:grid-cols-2 xl:grid-cols-4 gap-3 h-fit'>
                <iframe className='md:w-[375px] md:h-[300px]' src="https://www.youtube.com/embed/g-kTOs_10SM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className='md:w-[375px] md:h-[300px]' src="https://www.youtube.com/embed/VGWy0Uq3MLQ" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className='md:w-[375px] md:h-[300px]' src="https://www.youtube.com/embed/8UFNs3_-v34" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className='md:w-[375px] md:h-[300px]' src="https://www.youtube.com/embed/dWxbCJ48uK4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>


        </div>
    );
};

export default Youtube;