import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent implements OnInit {
  isSearching: boolean = false;
  isMobile: boolean = false;

  constructor(
    private movieService: MovieService,
    public breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
    .observe(['(min-width: 600px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    });
  }

  searchMovies(substring: string) {
    if (this.isMobile) {
      this.isSearching = true;
    }
    this.movieService.searchMovies(substring);
  }

  close() {
    this.isSearching = false;
  }
}
