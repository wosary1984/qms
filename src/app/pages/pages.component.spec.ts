import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { PageComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ControlSidebarComponent } from '../shared/controlsidebar/controlsidebar.component';
import { AuthService } from '../service/auth/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    providers: [ { provide: 'auth', useClass: AuthService }],
    imports: [
      RouterTestingModule,HttpClientTestingModule
    ],
      declarations: [
        PageComponent,
        HeaderComponent,
        SidebarComponent,
        ControlSidebarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
