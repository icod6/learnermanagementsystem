import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerhomeComponent } from './learnerhome.component';

describe('LearnerhomeComponent', () => {
  let component: LearnerhomeComponent;
  let fixture: ComponentFixture<LearnerhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnerhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
