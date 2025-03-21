import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarsComponent } from './progress-bars.component';

describe('ProgressBarsComponent', () => {
  let component: ProgressBarsComponent;
  let fixture: ComponentFixture<ProgressBarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressBarsComponent]
    });
    fixture = TestBed.createComponent(ProgressBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
