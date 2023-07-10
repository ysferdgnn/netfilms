import CategoriesLoading from '@/components/categories/loading'
import FeaturedMovieLoading from '@/components/featured-movie/loading'
import MoviesSectionLoading from '@/components/movies-section/loading'
import React from 'react'



async function Loading() {
    
    return (
        <div>
        <FeaturedMovieLoading></FeaturedMovieLoading>
        <CategoriesLoading></CategoriesLoading>
        <MoviesSectionLoading></MoviesSectionLoading>
        </div>
    )
}

export default Loading
