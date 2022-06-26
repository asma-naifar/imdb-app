import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { flag_fr } from 'src/assets/svg/flag_fr';
import { flag_usa } from 'src/assets/svg/flag_usa';
import { TranslateService } from '@ngx-translate/core';
import { X_icon } from 'src/assets/svg/X_icon ';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private translate: TranslateService,
    private movieService : MovieService
  ) {
    iconRegistry.addSvgIconLiteral(
      'flag_fr',
      sanitizer.bypassSecurityTrustHtml(flag_fr)
    );
    iconRegistry.addSvgIconLiteral(
      'flag_usa',
      sanitizer.bypassSecurityTrustHtml(flag_usa)
    );
    iconRegistry.addSvgIconLiteral(
      'X_icon',
      sanitizer.bypassSecurityTrustHtml(X_icon)
    );
  }

  ngOnInit(): void {}

  setFrench() {
    this.translate.use('fr');
  }

  setEnglish() {
    this.translate.use('en');
  }
}
