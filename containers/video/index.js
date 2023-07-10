import VideoPlayer from '@/components/videoPlayer'
import React from 'react'
import styles from './styles.module.css'
function VideoContainer({videos=[]}) {
    
  return (
        <div className={styles.videoContainer}>
            {videos.map((video) => (
        <VideoPlayer  key={video.key} videoUrl={`https://www.youtube.com/watch?v=${video.key}`}> </VideoPlayer>
      ))}
        </div>
  )
}

export default VideoContainer