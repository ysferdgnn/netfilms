import React from 'react'
import MovieContainer from '@/containers/movie';
import {notFound} from 'next/navigation'
import { getMovieDetail } from '@/services/movieService';
 async function MoviePage({params,searchParams}) {
    const movieDetail = await getMovieDetail(params.id)

    if(!movieDetail){
        notFound();
    }
    if(searchParams.error==="true"){
        throw new Error("Error happened!")
    }
  return (
    <MovieContainer movie={movieDetail}></MovieContainer>
  )
}

export default MoviePage;
