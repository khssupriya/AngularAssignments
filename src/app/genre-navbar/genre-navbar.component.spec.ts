import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreNavbarComponent } from './genre-navbar.component';

describe('GenreNavbarComponent', () => {
  let component: GenreNavbarComponent;
  let fixture: ComponentFixture<GenreNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
