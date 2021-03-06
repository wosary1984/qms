import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/shared/login/login.component';
import { AuthGuardService } from './service/auth/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuardService],
        loadChildren: './pages/pages.module#PagesModule'
    },
    {
        path: 'login',
        component: LoginComponent,
    }
    

];

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
} )
export class AppRoutingModule { }
