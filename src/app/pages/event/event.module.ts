import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/service/auth/auth-guard.service';
import { MainEventComponent } from './main-event/main-event.component';
import { KeyFactorComponent } from './key-factor/key-factor.component';

const routes: Routes = [{
    path: '',
    component: KeyFactorComponent,
    children: []
},
{
    path: 'event',
    component: MainEventComponent
}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule,
        FormsModule
    ],
    providers: [],
    declarations: [
        MainEventComponent,
        KeyFactorComponent
    ]
})
export class EventModule {

}