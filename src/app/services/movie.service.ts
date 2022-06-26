import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie-model';


/**
 * This service contains functions to load, search and update movies 
 */

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  moviesList : Array<Movie> = new Array<Movie>();
  movies$ : Subject<Array<Movie>> = new Subject<Array<Movie>>();

  constructor(private http: HttpClient) {}
  
  loadMovies() {
      this.http.get('assets/data/data.json').subscribe(
        (res) => {
          this.moviesList = Object.values(res) as Array<Movie>;
          this.moviesList = this.moviesList.filter(
            (movie: Movie) =>
              !Object.values(movie).every((x) => x === null || x === '')
          );
          this.movies$.next(this.moviesList);
        }
      );
  }

  searchMovies(substring : string) {
    this.movies$.next(this.moviesList.filter(movie => movie.primaryTitle.toLowerCase().includes(substring.toLowerCase())));
  }

  updateMovie(movieUpdate : Movie) {
    const index = this.moviesList.findIndex((movie => movie.tconst === movieUpdate.tconst));
    this.moviesList[index] = movieUpdate;
    this.movies$.next(this.moviesList);
  }
}
