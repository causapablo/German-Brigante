import React from 'react';
import { GrSoundcloud } from 'react-icons/gr';

const Soundcloud = () => {
    const divStyle1 = {
        "font-size": "10px", 
        "color": "#cccccc",
        "line-break": "anywhere",
        "word-break": "normal",
        "overflow": "hidden",
        "white-space": "nowrap",
        "text-overflow": "ellipsis",
        "font-weight": "100"
    };
    const divStyle2 = {
        "color": "#cccccc",
        "text-decoration": "none"
    }
    return (
        <div className='container mx-auto py-10 h-fit'>
            <div className='text-gray-300 flex items-center text-4xl font-extrabold px-10'>
                <GrSoundcloud/>
                <h1 className='ml-2'>Soundcloud</h1>
            </div>
            <div className='px-5 py-5 md:px-0'>
                <div className='container bg-white mx-auto h-[1px]'></div>
            </div>
            <div className='space-y-10'>
            <div>
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1358200579&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" title='Brigante'></iframe><div style={divStyle1}><a href="https://soundcloud.com/deephousemelodic" title="MELODIC.DEEP.HOUSE" rel="noreferrer" target="_blank" style={divStyle2}>MELODIC.DEEP.HOUSE</a> · <a href="https://soundcloud.com/deephousemelodic/new-chapter-091-podcast-mdh-by-german-brigante" rel="noreferrer" title="[NEW CHAPTER 091] - Podcast M.D.H. by German Brigante" target="_blank" style={divStyle2}>[NEW CHAPTER 091] - Podcast M.D.H. by German Brigante</a></div>
            </div>
            <div>
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1321769911&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" title='Brigante2'></iframe><div style={divStyle1}><a href="https://soundcloud.com/german-brigante" title="German Brigante" rel="noreferrer" target="_blank" style={divStyle2}>German Brigante</a> · <a href="https://soundcloud.com/german-brigante/german-brigante-at-playground-music-festival-sao-paulo-brazil-16th-july-2022" title="German Brigante @Playground Music Festival São Paulo, BRAZIL (16th July 2022)" target="_blank" rel="noreferrer" style={divStyle2}>German Brigante @Playground Music Festival São Paulo, BRAZIL (16th July 2022)</a></div>
            </div>
            <div>
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1322789803&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" title='Brigante3'></iframe><div style={divStyle1}><a href="https://soundcloud.com/dhsp" title="Deep House Spain" target="_blank" rel="noreferrer" style={divStyle2}>Deep House Spain</a> · <a href="https://soundcloud.com/dhsp/dhsp-mixtape-german-brigante" title="DHSP Mixtape - German Brigante" target="_blank" rel="noreferrer" style={divStyle2}>DHSP Mixtape - German Brigante</a></div>
            </div>
            </div>


        </div>
    );
};

export default Soundcloud;