import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatonsultationsComponent } from './patonsultations.component';

describe('PatonsultationsComponent', () => {
  let component: PatonsultationsComponent;
  let fixture: ComponentFixture<PatonsultationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatonsultationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatonsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
