import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFactorComponent } from './key-factor.component';

describe('KeyFactorComponent', () => {
  let component: KeyFactorComponent;
  let fixture: ComponentFixture<KeyFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
