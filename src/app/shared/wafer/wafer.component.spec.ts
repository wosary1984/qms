import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaferComponent } from './wafer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WaferComponent', () => {
  let component: WaferComponent;
  let fixture: ComponentFixture<WaferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaferComponent ],
      imports:[HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
