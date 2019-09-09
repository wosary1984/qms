import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../service/auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ControlSidebarComponent } from '../shared/controlsidebar/controlsidebar.component';

const routes: Routes = [{
    path: '',
    component: PageComponent,
    children: [{
        path: 'home',
        canActivate: [AuthGuardService],
        component: HomeComponent
    },{
        path: 'admin',
        canActivate: [AuthGuardService],
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: 'semi',
        canActivate: [AuthGuardService],
        loadChildren: './semi/semi.module#SemiModule'
    }]
}];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        PageComponent,
        HeaderComponent,
        SidebarComponent,
        ControlSidebarComponent,
        HomeComponent
    ],
    exports: [RouterModule],
    providers: []
})
export class PagesModule {}