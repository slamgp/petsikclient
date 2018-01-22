import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsDateComponent } from './pets-date.component';

describe('PetsDateComponent', () => {
  let component: PetsDateComponent;
  let fixture: ComponentFixture<PetsDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
