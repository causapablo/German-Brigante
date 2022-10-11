import React from 'react';
import {BsSpotify, BsApple, BsYoutube, BsInstagram, BsFacebook} from 'react-icons/bs';
import {SiBeatport} from 'react-icons/si';
import {GrSoundcloud} from 'react-icons/gr';

const Footer = () => {
    return (
        <div className='font-Montserrat text-gray-300 text-xl text-center'>
            <h1 className='pt-5 text-[10px] md:text-[12px]'>© 2022 German Brigante. All Right Reserved.</h1>
            <div className='container mx-auto flex justify-center space-x-3 md:space-x-10 py-5'>
                <a href="https://open.spotify.com/artist/2h7fN6KOZVgWQ39sYK0jJm?si=ywM_eU5jQxCaTQXhAPna7A" target="_blank" rel="noreferrer"><BsSpotify/></a>
                <a href="https://www.beatport.com/artist/german-brigante/128913" target="_blank" rel="noreferrer"><SiBeatport/></a>
                <a href="https://music.apple.com/us/artist/german-brigante/362418980" target="_blank" rel="noreferrer"><BsApple/></a>
                <a href="https://soundcloud.com/german-brigante" target="_blank" rel="noreferrer"><GrSoundcloud/></a>
                <a href="https://www.youtube.com/channel/UCMYdbWdVIKF6roLCLyjOU4Q/videos" target="_blank" rel="noreferrer"><BsYoutube/></a>
                <a href="https://www.instagram.com/germanbrigante/" target="_blank" rel="noreferrer"><BsInstagram/></a>
                <a href="https://www.facebook.com/germanbrigantemusic" target="_blank" rel="noreferrer"><BsFacebook/></a>
            </div>
            
            <div className='h-[1px] bg-white container mx-auto w-1/2'>

            </div>
            <h1 className='text-[8px] md:text-[10px]'>Designed by Augustus Pablo</h1>
        </div>
    );
};

export default Footer;