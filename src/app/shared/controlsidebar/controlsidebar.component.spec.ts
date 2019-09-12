import { async, ComponentFixture, TestBed ,getTestBed} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ControlSidebarComponent } from './controlsidebar.component';
import { AuthService } from 'src/app/service/auth/auth.service';

describe('ControlSidebarComponent', () => {
    let component: ControlSidebarComponent;
    let fixture: ComponentFixture < ControlSidebarComponent > ;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [ControlSidebarComponent],
                imports:[  HttpClientTestingModule ],
                providers: [{ provide: 'auth', useClass: AuthService }]
            })
            .compileComponents()
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ControlSidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});