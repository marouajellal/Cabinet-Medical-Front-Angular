import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRdvToPatientComponent } from './add-rdv-to-patient.component';

describe('AddRdvToPatientComponent', () => {
  let component: AddRdvToPatientComponent;
  let fixture: ComponentFixture<AddRdvToPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRdvToPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRdvToPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
