import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SpinnerComponent } from 'src/app/shared/spinner.component';
import { LoginComponent } from 'src/app/shared/login/login.component';
import { AuthService } from 'src/app/service/auth/auth.service';
import { HttpClientModule } from "@angular/common/http";

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
        { provide: 'auth', useClass: AuthService }
    ],
    bootstrap: [AppComponent]
} )
export class AppModule { }
