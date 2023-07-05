import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertListesComponent } from './advert-listes.component';

describe('AdvertListesComponent', () => {
  let component: AdvertListesComponent;
  let fixture: ComponentFixture<AdvertListesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertListesComponent]
    });
    fixture = TestBed.createComponent(AdvertListesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
