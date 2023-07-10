"use client"
import React from 'react'
import ReactPlayer from 'react-player'
import styles from './styles.module.css'

export default function VideoPlayer({videoUrl=''}){
    console.log(videoUrl)
    return (
      <div className={styles.videoCard}>
        <ReactPlayer url={videoUrl} />
      </div>
    )
  }