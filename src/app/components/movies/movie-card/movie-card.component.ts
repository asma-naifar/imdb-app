import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from 'src/app/models/movie-model';
import { icon_pencil } from 'src/assets/svg/icon_pencil';
import { MoviesEditCardComponent } from '../movies-edit-card/movies-edit-card.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie = new Movie();

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public dialog: MatDialog
  ) {
    iconRegistry.addSvgIconLiteral(
      'icon_pencil',
      sanitizer.bypassSecurityTrustHtml(icon_pencil)
    );
  }

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(MoviesEditCardComponent,
      { data: this.movie, disableClose: true }).afterClosed();
  }
}
