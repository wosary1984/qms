import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuEventComponent } from './cu-event.component';

describe('CuEventComponent', () => {
  let component: CuEventComponent;
  let fixture: ComponentFixture<CuEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
