import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesIngPosterComponent } from './vehicles-ing-poster.component';

describe('VehiclesIngPosterComponent', () => {
  let component: VehiclesIngPosterComponent;
  let fixture: ComponentFixture<VehiclesIngPosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclesIngPosterComponent]
    });
    fixture = TestBed.createComponent(VehiclesIngPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
