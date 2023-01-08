import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityGoalComponent } from './community-goal.component';

describe('CommunityGoalComponent', () => {
  let component: CommunityGoalComponent;
  let fixture: ComponentFixture<CommunityGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
