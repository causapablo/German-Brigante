import React from 'react';
import { SiSemanticrelease } from 'react-icons/si'
const Releases = () => {
    return (
        <div className='container mx-auto flex flex-col space-y-3 px-10'>
            <div className='text-gray-300 flex items-center text-4xl font-extrabold px-10'>
                <SiSemanticrelease />
                <h1 className='ml-2'>Lastest Releases</h1>
            </div>
            <div className='px-5 py-2 md:px-0'>
                <div className='container bg-white mx-auto h-[1px]'></div>
            </div>
            <div className='grid gap-2 lg:grid lg:grid-cols-2 lg:gap-3'>
                <a href="https://www.beatport.com/release/german-brigante-remixes/3785309" target='_blank' rel='noreferrer'>
                    <div className='flex h-48 p-4 lg:text-xl font-bold bg-black bg-opacity-90 text-gray-300 hover:border-[#C21010] hover:border '>
                        <img className='w-40' src="https://geo-media.beatport.com/image_size/1400x1400/68576b5b-78e9-48a5-aac3-5e9c268dd409.jpg" alt="new released" />
                        <div className='pl-6 space-y-6 h-fit'>
                            <div>NOISSIER OCLUM HELIENA GERMAN BRIGANTE</div>
                            <div>GERMAN BRIGANTE REMIXES</div>
                            <div className='text-[#C21010]'>COMING SOON.</div>
                        </div>
                    </div>
                </a>
                <a href="https://www.beatport.com/release/magma/3856875" target='_blank' rel='noreferrer'>
                    <div className='flex h-48 p-4 lg:text-xl font-bold bg-black bg-opacity-90 text-gray-300 hover:border-[#C21010] hover:border'>
                        <img className='w-40' src="https://geo-media.beatport.com/image_size/1400x1400/da807b71-f706-4d83-a207-4a82eb1c94bd.jpg" alt="new released" />
                        <div className='pl-6 space-y-6'>
                            <div>GERMAN BRIGANTE YAMIL</div>
                            <div>MAGMA</div>
                            <div className='text-[#C21010]'>LAST RELEASE.</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Releases;