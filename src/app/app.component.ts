import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { arrow_up } from 'src/assets/svg/arrow_up';
import {TranslateService} from "@ngx-translate/core";
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'IMBD';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private translate: TranslateService,
    private movieService : MovieService
  ) {
    iconRegistry.addSvgIconLiteral(
      'arrow_up',
      sanitizer.bypassSecurityTrustHtml(arrow_up)
    );
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.movieService.loadMovies();
  }

  topFunction() {
    this.document.body.scrollTop = 0; // For Safari
    this.document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
