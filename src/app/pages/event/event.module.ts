import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService } from 'src/app/service/auth/auth-guard.service';
import { MainEventComponent } from './main-event/main-event.component';
import { KeyFactorComponent } from './key-factor/key-factor.component';
import { ConfirmDialogService } from 'src/app/service/util/confirm-dialog.service';
import { CuKeyFactorComponent } from './key-factor/cu-key-factor/cu-key-factor.component';
import { FactorDataService } from 'src/app/service/data/factor-data.service';
import { CuEventComponent } from './main-event/cu-event/cu-event.component';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [{
    path: '',
    component: KeyFactorComponent,
    children: []
},
{
    path: 'event',
    component: MainEventComponent
},
{
    path: 'tags',
    component: TagsComponent
}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule,
        FormsModule
    ],
    providers: [ConfirmDialogService, FactorDataService],
    declarations: [
        MainEventComponent,
        KeyFactorComponent,
        CuKeyFactorComponent,
        CuEventComponent,
        TagsComponent
    ]
})
export class EventModule {

}