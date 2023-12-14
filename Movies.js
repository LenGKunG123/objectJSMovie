// 65130500043 Pannawat Sripa

class Movies {
    // allMovies = []

    // constructor(title, director, year, genre){
    //     this.title = title
    //     this.director = director
    //     this.year = year
    //     this.genre = genre
    // }

    // getAllMovies(allMovies){
    //   return allMovies
    // }

    // addMovie(title, director, year, genre){
    //   if(title === undefined || director === undefined || year === undefined || genre === undefined) return
    //   const movie = new Movies(title, director, year, genre)
    //   return allMovies.push(movie)
    // }

    // updateMovie(title, updatedDetails){
    //   const matchmovie = allMovies.array.forEach(m => {
    //     m.title === this.title
    //   });
    //   matchmovie.title = updatedDetails.title
    //   matchmovie.director = updatedDetails.director
    //   matchmovie.year = updatedDetails.year
    //   matchmovie.genre = updatedDetails.genre
    //   return matchmovie
    // }

    // deleteMovieByTitle(title){
    //   allMovie

    // }
    constructor() {
        this.movies = []
    }

    getAllMovies() {
        return this.movies
    }

    addMovie(title, director, year, genre) {
        if (!title || !director || !year || !genre) return undefined

        const normalizedTitle = title.toLowerCase()
        const existingMovie = this.movies.find(
            (movie) =>
                movie.title.toLowerCase() === normalizedTitle &&
                movie.director.toLowerCase() === director.toLowerCase()
        )

        if (existingMovie) return undefined

        const newMovie = { title, director, year, genre }
        this.movies.push(newMovie)
        return newMovie
    }

    updateMovie(title, updatedDetails) {
        const normalizedTitle = title.toLowerCase()
        const movieIndex = this.movies.findIndex(
            (movie) => movie.title.toLowerCase() === normalizedTitle
        )

        if (movieIndex === -1) return undefined

        Object.assign(this.movies[movieIndex], updatedDetails)
        return this.movies[movieIndex]
    }

    deleteMovieByTitle(title) {
        const normalizedTitle = title.toLowerCase()
        const movieIndex = this.movies.findIndex(
            (movie) => movie.title.toLowerCase() === normalizedTitle
        )

        if (movieIndex === -1) {
            console.log("No movie deleted")
            return
        }

        const deletedMovie = this.movies.splice(movieIndex, 1)[0]
        console.log(`${deletedMovie.title} is deleted`)
    }
}

// const m1 = Movies.addMovie( 'Inception', 'Christopher Nolan', 2010, 'Science Fiction' )

module.exports = Movies
