import React from 'react';
import MusicItem from './MusicItem';

const MusicList = ({songs}) => {
    const songsItems = songs.map((song, index) => {
        // return <li>{song.artist}{song.title}</li>

        return <MusicItem song = {song} key={index}/>
    });
    
    return(
        <div>
            
                
                    {songsItems}
                    
                
            
        </div>
            
            
            
        

    )

}

export default MusicList;