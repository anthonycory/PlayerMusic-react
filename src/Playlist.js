import React from 'react'
import { BsMusicNoteBeamed, BsThreeDots } from 'react-icons/bs';
import { WaveSpinner } from "react-spinners-kit";

export default function Playlist({songs, songIndex, ChangeSong}) {
    
    return (
        <React.Fragment>
            <div className="container-playlist">
                <button className="info">
                    <BsThreeDots  size={20} />
                </button>
                {songs.map((item, index) => {

                    if(songIndex === index)  {
                    return (
                        <div className="container-song-active" key={index}>                
                        <WaveSpinner size={10} />
                        <div className="song-active" >{item.title}</div> 
                        </div>
                    )
                    } else {
                        return (
                        <button onClick={(e) => ChangeSong(e, index)} key={index} className="container-song">
                            <BsMusicNoteBeamed size={20}/>
                        <div className="song" key={index}>{item.title}</div> 
                        </button>
                        )
                    }
                })}
            </div>
        </React.Fragment>
    )
}
