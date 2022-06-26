import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie-model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-edit-card',
  templateUrl: './movies-edit-card.component.html',
})
export class MoviesEditCardComponent implements OnInit {

  yes = new FormControl('');
  no = new FormControl('');
  minutes = new FormControl('');
  endYear = new FormControl('');
  startYear= new FormControl('');
  genres= new FormControl('');

  selected : string = "" ;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Movie, private movieService : MovieService) {}

  ngOnInit(): void {}

  updateMovie() {
    this.data.runtimeMinutes = this.minutes.value && this.minutes.value !== "" ? this.minutes.value : this.data.runtimeMinutes;
    this.data.endYear = this.endYear.value && this.endYear.value !== "" ? this.endYear.value : this.data.endYear;
    this.data.startYear = this.startYear.value && this.startYear.value !== "" ? this.startYear.value : this.data.startYear;
    this.data.genres = this.genres.value && this.genres.value !== "" ? this.genres.value : this.data.genres;
    this.data.isAdult = this.selected !== "" ? this.selected : this.data.isAdult;
    this.movieService.updateMovie(this.data);
  }
}
