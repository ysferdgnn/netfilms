import VideoPlayer from '@/components/videoPlayer'
import React from 'react'

function VideoContainer({videos=[]}) {
    
  return (
        <div>
            {videos.map((video) => (
        <VideoPlayer key={video.key} videoUrl={`https://www.youtube.com/watch?v=${video.key}`}> </VideoPlayer>
      ))}
        </div>
  )
}

export default VideoContainer