import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Myrdvs1Component } from './myrdvs1.component';

describe('Myrdvs1Component', () => {
  let component: Myrdvs1Component;
  let fixture: ComponentFixture<Myrdvs1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Myrdvs1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Myrdvs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
