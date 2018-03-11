import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandHereComponent } from './land-here.component';

describe('LandHereComponent', () => {
  let component: LandHereComponent;
  let fixture: ComponentFixture<LandHereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandHereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
