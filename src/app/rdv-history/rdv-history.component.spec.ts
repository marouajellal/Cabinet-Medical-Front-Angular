import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvHistoryComponent } from './rdv-history.component';

describe('RdvHistoryComponent', () => {
  let component: RdvHistoryComponent;
  let fixture: ComponentFixture<RdvHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdvHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
