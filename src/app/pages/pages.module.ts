import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../service/auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';

const routes: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            {
                path: 'starter',
                canActivate: [AuthGuardService],
                loadChildren: './starter/starter.module#StarterModule'
            }
        ]
    }
];
@NgModule( {
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild( routes )
    ],
    declarations: [
        PageComponent,
        HeaderComponent,
        SidebarComponent,
        HomeComponent
    ],
    exports: [RouterModule],
    providers: [
    ]
} )
export class PagesModule { }
