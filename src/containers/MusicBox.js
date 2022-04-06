import React, { useEffect, useState } from 'react';
import MusicList from '../components/MusicList';
import MusicItem from '../components/MusicItem';

const MusicBox = () => {
    const [songs, setSongs] = useState([]);

    const [selectedSong, setSelectedSong] = useState(null);

    useEffect(() => {
        getSongs();
    }, [] );

    const getSongs = function (){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .than(res => res.json())
        .than(songs => setSongs(songs));
    }
    return(
        <div>
            
        </div>
    )
}


export default MusicBox;