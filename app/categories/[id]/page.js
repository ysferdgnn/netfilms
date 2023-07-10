import React from 'react'
import FeaturedMovie from '@/components/featured-movie';
import Categories from '@/components/categories';
import MoviesSection from '@/components/movies-section';
import { getGenres,getMoviesWithGenres } from '@/services/movieService';


async function  CategoryPage({params}) {

  const categoryId = params.id;
  const {genres: genres} = await getGenres();
  const {results: movies} = await getMoviesWithGenres(categoryId);

 let genre = genres.find(genre => genre.id.toString() === categoryId)
 let featuredMovie  = movies[0]

   
  return (<div>
    <FeaturedMovie movie={featuredMovie}></FeaturedMovie>
    <Categories categories={Array.of(genre)}></Categories>
    <MoviesSection title={genre.name} movies={movies}></MoviesSection>
    </div>
  )
}

export default  CategoryPage;