import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ContentHeaderComponent } from './content-header/content-header.component';

@NgModule( {
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ContentHeaderComponent
    ],
    exports: [
        ContentHeaderComponent
    ],
    providers: []
} )
export class SharedModule { }  
