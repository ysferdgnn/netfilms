import HomeContainer from "@/containers/home"
import { getTopRatedMovies,getPopularFilms,getUpComingFilms,getGenres } from "@/services/movieService";



async function Home() {
    const{results : topRatedMovies} = await getTopRatedMovies();
    const{results: popularFilms} = await getPopularFilms();
    const{results: upComingFilms} = await getUpComingFilms();
    const{genres: genres} = await getGenres();
    return (<HomeContainer topRatedMovies={topRatedMovies} popularFilms={popularFilms} upComingFilms={upComingFilms} genres={genres}></HomeContainer>)
}

export default Home
