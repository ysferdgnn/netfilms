import FeaturedMovie from '@/components/featured-movie'
import VideoPlayer from '@/components/videoPlayer'
import React from 'react'

import { getMovieVideos } from '@/services/movieService'
import VideoContainer from '../video';

export default async function MovieContainer({movie}) {
  const {results : videos} = await getMovieVideos(movie.id);

  return (<div>
     <FeaturedMovie movie={movie} isCompact={false}></FeaturedMovie>
     <VideoContainer videos={videos}></VideoContainer>
     </div>
  )
}
