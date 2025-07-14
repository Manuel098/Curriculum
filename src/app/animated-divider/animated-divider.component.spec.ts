import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedDividerComponent } from './animated-divider.component';

describe('AnimatedDividerComponent', () => {
  let component: AnimatedDividerComponent;
  let fixture: ComponentFixture<AnimatedDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
