import React from 'react';

const MusicItem = ({song, index}) => {
    return (
        <li>
            <h1>Chart Top {index}</h1>
            <h2>Title: {song['im:name'].label}</h2>
            <h3>Artist:{song['im:artist'].label}</h3>
            <img src={song['im:image'][2].label} />
            <audio controls src={song.link[1].attributes.href} />

        </li>
        
        
        // <div>
            
                
        //     <p>{song.title.label}</p>
                
        
            
           

        // </div>
    )
}

export default MusicItem;