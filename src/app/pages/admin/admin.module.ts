import { NgModule } from '@angular/core';
import { AdminComponent } from "./admin.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/service/auth/auth-guard.service';
import { PersonComponent } from './person/person.component';

const routes: Routes = [{
    path: '',
    component: AdminComponent,
    children: [{
        path: 'person',
        canActivate: [AuthGuardService],
        component: PersonComponent
    }]
}];

@NgModule( {
    imports: [
        RouterModule.forChild( routes ),
        SharedModule
    ],
    providers: [],
    declarations: [
        AdminComponent,
        PersonComponent]
} )
export class AdminModule {

}