import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerprofileComponent } from './learnerprofile.component';

describe('LearnerprofileComponent', () => {
  let component: LearnerprofileComponent;
  let fixture: ComponentFixture<LearnerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnerprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
