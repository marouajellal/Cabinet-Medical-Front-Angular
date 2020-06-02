import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrdvsComponent } from './myrdvs.component';

describe('MyrdvsComponent', () => {
  let component: MyrdvsComponent;
  let fixture: ComponentFixture<MyrdvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrdvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrdvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
