import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConComponent } from './add-con.component';

describe('AddConComponent', () => {
  let component: AddConComponent;
  let fixture: ComponentFixture<AddConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
