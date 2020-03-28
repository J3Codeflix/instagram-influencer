import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesModalComponent } from './places-modal.component';

describe('PlacesModalComponent', () => {
  let component: PlacesModalComponent;
  let fixture: ComponentFixture<PlacesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
