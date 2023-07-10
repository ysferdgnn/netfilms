const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2Q4ZDMwZWNkNzI2YzJjZDg1YzdmMDI5MWM5ZWIyZCIsInN1YiI6IjY0YTQ2ZDJjMTU4Yzg1MDExYzg0MDgzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RCK5ncifBDOUiN4XFVueEqc9JXdM3zoVcm7Y-MrHl8E'
    }
};

export async function getTopRatedMovies() {
    let response = fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options)
    return(await response).json();
}
export async function getPopularFilms() {
    let response = fetch('https://api.themoviedb.org/3/movie/popular?&page=1', options);
    return(await response).json();
}
export async function getUpComingFilms() {
    let response = fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', options);
    return(await response).json();
}
export async function getGenres() {
    let response = fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
    return(await response).json();
}

export async function getMoviesWithGenres(genreId){
    let response =fetch(`https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&with_genres=${genreId}`, options)
    return (await response).json();
}
export async function getMovieDetail(movieId){
    let response = fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
    return (await response).json();
}

export async function getMovieVideos (movieId){
    let response =fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
    return (await response).json();
}