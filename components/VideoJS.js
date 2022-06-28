import React, {useRef, useEffect} from 'react'

const VideoJS = () => {
  const ref = useRef(null);
  useEffect(() => {
    const video = ref.current;
    video.playbackRate = 0.5;
    
  }, []);

  return (
      <video id='video' className='w-full' ref={ref} autoPlay muted loop playsInline preload="auto" style={{ height:'91.45vh', minHeight:"600px", objectFit:'cover', filter: 'brightness(55%)', boxShadow: 'rgb(15 15 15 / 50%) 5px 14px 14px' }}>
        <source src="https://i.imgur.com/dnogOPY.mp4" />
      </video>      
  )
}

export default VideoJS;