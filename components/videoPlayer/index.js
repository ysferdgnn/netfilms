"use client"
import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoPlayer({videoUrl=''}){
    console.log(videoUrl)
    return (
      <div>
        <ReactPlayer url={videoUrl} />
      </div>
    )
  }