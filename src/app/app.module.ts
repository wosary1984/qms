import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SpinnerComponent } from 'src/app/shared/spinner.component';
import { LoginComponent } from 'src/app/shared/login/login.component';
import { AuthService } from 'src/app/service/auth/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuardService } from './service/auth/auth-guard.service';
import { HttpxsrfinterceptorService } from './service/xsr/httpxsrfinterceptor.service';

@NgModule( {
    declarations: [
        AppComponent,
        SpinnerComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        AuthGuardService,
        { provide: 'auth', useClass: AuthService },
        { provide: HTTP_INTERCEPTORS, useClass: HttpxsrfinterceptorService, multi: true }
    ],
    bootstrap: [AppComponent]
} )
export class AppModule { }
