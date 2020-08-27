import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsCreateComponent } from './planets-create.component';

describe('PlanetsCreateComponent', () => {
  let component: PlanetsCreateComponent;
  let fixture: ComponentFixture<PlanetsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
