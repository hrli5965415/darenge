import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import ReactPlayer from 'react-player';
import YouTubePlayer from 'youtube-player';

export const Player = () => {


    const [hasWindow, setHasWindow] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    const ref = useRef()

    const seekTo = () => {
      ref.current.seekTo(100)
      setIsPlaying(true)

    }

    useEffect(()=>{
      if(typeof window !== 'undefined'){
        setHasWindow(true)
      }
    },[])

  return (
    <>
      <div id='player' >
        {hasWindow && <ReactPlayer ref={ref} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls playing={isPlaying}/>}
      </div>
      <button onClick={()=>seekTo()}>
        100
      </button>
    </>
    
  )
}



