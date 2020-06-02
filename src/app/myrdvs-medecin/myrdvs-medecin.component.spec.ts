import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrdvsMedecinComponent } from './myrdvs-medecin.component';

describe('MyrdvsMedecinComponent', () => {
  let component: MyrdvsMedecinComponent;
  let fixture: ComponentFixture<MyrdvsMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrdvsMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrdvsMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
