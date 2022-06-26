import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesEditCardComponent } from './movies-edit-card.component';

describe('MoviesEditCardComponent', () => {
  let component: MoviesEditCardComponent;
  let fixture: ComponentFixture<MoviesEditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesEditCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
