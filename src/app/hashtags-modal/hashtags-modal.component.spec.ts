import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagsModalComponent } from './hashtags-modal.component';

describe('HashtagsModalComponent', () => {
  let component: HashtagsModalComponent;
  let fixture: ComponentFixture<HashtagsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
