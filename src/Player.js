
import React, {useState, useEffect } from 'react'
import { ImPlay2 } from 'react-icons/im';
import { AiOutlinePauseCircle, AiFillStepBackward } from 'react-icons/ai';
import { BiSkipNext } from 'react-icons/bi';
import Playlist from "./Playlist"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Player({ song}) {
    const [PlaySong, setPlaySong] = useState(false)
    const [duration, setDuration] = useState(0)
    const [songIndex, setSongIndex] = useState(0)

    useEffect(() => {
    }, [duration])
  
    const Play = e => {
      e.preventDefault();
          setPlaySong(true)
          document.getElementsByClassName('audio')[0].play()
          interval()
    }

    const Pause = e => {
        e.preventDefault();
        setPlaySong(false)
        document.getElementsByClassName('audio')[0].pause()
      }

    const nextSong = e => {
        e.preventDefault();
        document.getElementsByClassName('audio')[0].pause()
        setSongIndex(songIndex + 1)
        setDuration(0)
        Pause(e)
        setTimeout(() => {
            Play(e) 
        }, 100);
      }

    const backSong = e => {
        e.preventDefault();
        document.getElementsByClassName('audio')[0].pause()
        setSongIndex(songIndex - 1)
        setDuration(0)
        Pause(e)
        setTimeout(() => {
            Play(e) 
        }, 100);
      }
  
    const interval = () => {     
        if(duration < 100) {
            var value = setInterval(() => {
            const value = document.getElementsByClassName('audio')[0].duration
            const time = document.getElementsByClassName('audio')[0].currentTime
            const result = (time / value) * 100
            setDuration(result)
        }, 100);
    }else {
        clearInterval(value)
    }
  }

    const ChangeSong = (e, index) => {
        e.preventDefault();
        document.getElementsByClassName('audio')[0].pause()
        setSongIndex(index)
        setTimeout(() => {
            Play(e)
        }, 200);
        toast.dark('🎵 ' + song[index].title, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
          
    return (
        <React.Fragment>
            <ToastContainer />
            <div className="player">
                <div className="container-player">
                    <div className="container-control">
                    <button className="button" onClick={backSong}>
                        <AiFillStepBackward size={22} color="white"/>
                    </button>
                    {PlaySong === true ? <button className="button" onClick={Pause}><AiOutlinePauseCircle size={30} color="white" /></button> :<button className="button" onClick={Play}><ImPlay2 size={30} color="white" /></button>}
                    <button className="button" onClick={nextSong}>
                        <BiSkipNext size={30} color="white"/>
                    </button>
                    </div>
                    <audio className="audio" src={song[songIndex].url}/>
                    <input type="range" className="range" value={duration} onChange={({ target }) => setDuration(target.value)} />
                </div>
            </div>
            <Playlist songs={song} songIndex={songIndex} duration={duration} ChangeSong={ChangeSong} />
        </React.Fragment>
    )
}

export default Player;