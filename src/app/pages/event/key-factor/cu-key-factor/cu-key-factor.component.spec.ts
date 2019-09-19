import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuKeyFactorComponent } from './cu-key-factor.component';

describe('CuKeyFactorComponent', () => {
  let component: CuKeyFactorComponent;
  let fixture: ComponentFixture<CuKeyFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuKeyFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuKeyFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
