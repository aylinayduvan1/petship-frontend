import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesListesComponent } from './categories-listes.component';

describe('CategoriesListesComponent', () => {
  let component: CategoriesListesComponent;
  let fixture: ComponentFixture<CategoriesListesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesListesComponent]
    });
    fixture = TestBed.createComponent(CategoriesListesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});


