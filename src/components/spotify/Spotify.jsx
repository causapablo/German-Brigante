import React from 'react';
import { BsSpotify } from 'react-icons/bs';
const Spotify = () => {
    return (
        <div className='container md:mx-auto mx-4 py-20'>
            <div className='text-gray-300 flex items-center text-4xl font-extrabold px-10'>
                <BsSpotify />
                <h1 className='ml-2'>Spotify</h1>
            </div>
            <div className='px-5 py-5 md:px-0'>
                <div className='container bg-white mx-auto h-[1px]'></div>
            </div>
            <iframe style={{ 'border-radius': '12px' }} title='German Brigante' src="https://open.spotify.com/embed/artist/2h7fN6KOZVgWQ39sYK0jJm?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    );
};

export default Spotify;