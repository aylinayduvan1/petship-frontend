import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInfoListesComponent } from './users-info-listes.component';

describe('UsersInfoListesComponent', () => {
  let component: UsersInfoListesComponent;
  let fixture: ComponentFixture<UsersInfoListesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersInfoListesComponent]
    });
    fixture = TestBed.createComponent(UsersInfoListesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
