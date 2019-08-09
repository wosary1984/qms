import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/service/auth/auth-guard.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WaferComponent } from 'src/app/shared/wafer/wafer.component';

const routes: Routes = [{
    path: '',
    component: WaferComponent,
    children: [{
        path: 'person',
        canActivate: [AuthGuardService],
        component: WaferComponent
    }]
}];

@NgModule( {
    imports: [
        RouterModule.forChild( routes ),
        SharedModule,
        CommonModule,
        FormsModule
    ],
    providers: [],
    declarations: [
        ]
} )
export class WaferModule {

}