import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologyBtnComponent } from './tecnology-btn.component';

describe('TecnologyBtnComponent', () => {
  let component: TecnologyBtnComponent;
  let fixture: ComponentFixture<TecnologyBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnologyBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologyBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
