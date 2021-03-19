import React, {useState} from 'react'
import { BsMusicNoteBeamed, BsThreeDots } from 'react-icons/bs';
import { FcSearch } from 'react-icons/fc';
import { WaveSpinner } from "react-spinners-kit";

export default function Playlist({songs, songIndex, ChangeSong}) {
    const [search, setSearch] = useState("g")


    const filterData = songs.filter((item) => {
        return item.title.toLowerCase().indexOf(search) >= 0
    })

    
    return (
        <React.Fragment>
            <div className="container-playlist">
                <button className="info">
                    <BsThreeDots  size={20} />
                </button>
                <div className="container-search">
                    <FcSearch size={20} />
                    <input className="search" type="text" placeholder="Recherche" onChange={(e) => setSearch(e.target.value)} />
                </div>
                {search.length > 1 ? filterData.map((item, index) => {
                    if(songs[songIndex].title === item.title)  {
                    return (
                        <div className="container-song-active" key={index}>                
                        <WaveSpinner size={10} />
                        <div className="song-active" >{item.title}</div> 
                        </div>
                    )}else {
                        return (
                        <button onClick={(e) => ChangeSong(e, index)} key={index} className="container-song">
                            <BsMusicNoteBeamed size={20}/>
                        <div className="song" key={index}>{item.title}</div> 
                        </button>
                        )
                    }}) : (
                        songs.map((item, index) => {
                            if(songIndex === index)  {
                                return (
                                    <div className="container-song-active" key={index}>                
                                    <WaveSpinner size={10} />
                                    <div className="song-active" >{item.title}</div> 
                                    </div>
                                )}else {
                                    return (
                                    <button onClick={(e) => ChangeSong(e, index)} key={index} className="container-song">
                                        <BsMusicNoteBeamed size={20}/>
                                    <div className="song" key={index}>{item.title}</div> 
                                    </button>
                                    )
                                }
                        })
                    )}
                {/* {songs.map((item, index) => {

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
                })} */}
            </div>
        </React.Fragment>
    )
}
