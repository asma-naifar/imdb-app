import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html'
})
export class MoviesViewComponent implements OnInit {
  page: number = 1;
  movies : Array<Movie> = new Array<Movie>();
  isLoading : boolean = true;
  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.movieService.movies$.subscribe(movies => {
      this.movies = movies;
      this.isLoading = false;
    });
  }

}
