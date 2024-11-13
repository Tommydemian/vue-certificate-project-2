import { defineStore } from "pinia";
import { Movie, Movies } from "../App.vue";
import { items } from "../movies.json";
import { MovieGenres } from "../components/GenreFilter.vue";

type State = {
  movies: Movies;
};

export const useMoviesStore = defineStore("movies", {
  state: (): State => ({
    movies: items,
  }),
  getters: {
    moviesRating: (state) => state.movies.map((el) => el.rating),
    moviesFilteredByGenre: (state) => {
      return (filterAgainst: MovieGenres | undefined) => {
        if (!filterAgainst) return state.movies;
        return state.movies.filter((movie) =>
          movie.genres.includes(filterAgainst),
        );
      };
    },
    totalMovies: (state) => state.movies.length,
    avgRating: (state) => {
      return (
        state.movies.reduce((acc, curr) => acc + curr.rating, 0) /
        state.movies.length
      );
    },
  },
  actions: {
    createMovie(movieData: Movie) {
      const newMovie = movieData;
      this.movies.push(newMovie);
    },
    removeMovie(movieId: number) {
      this.movies = this.movies.filter((el: Movie) => el.id !== movieId);
    },
    updateMovie(updatedMovie: Movie) {
      this.movies = this.movies.map((movie: Movie) =>
        movie.id === updatedMovie.id ? { ...updatedMovie } : movie,
      );
    },
  },
});
