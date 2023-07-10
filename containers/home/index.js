import react from "react";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";


 



async function HomeContainer({topRatedMovies=[],popularFilms=[],upComingFilms=[],genres=[]}){
  

 return <div>
    <FeaturedMovie movie={topRatedMovies[0]}></FeaturedMovie>
    <Categories categories={genres}></Categories>
    <MoviesSection title='Top Rated' movies={topRatedMovies}></MoviesSection>
    <MoviesSection title='Popular Films' movies={popularFilms}></MoviesSection>
    <MoviesSection title='UpComing' movies ={upComingFilms}></MoviesSection>
 </div>
}
export default HomeContainer;
