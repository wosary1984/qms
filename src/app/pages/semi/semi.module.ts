import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/service/auth/auth-guard.service';
import { OverviewComponent } from './wafer/overview.component';

const routes: Routes = [{
    path: '',
    component: OverviewComponent,
    children: [{
        path: 'wafer',
        canActivate: [AuthGuardService],
        component: OverviewComponent
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
        OverviewComponent
        ]
} )
export class SemiModule {

}