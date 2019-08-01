import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule( {
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ContentHeaderComponent,
        ToolbarComponent
    ],
    exports: [
        ContentHeaderComponent,
        ToolbarComponent
    ],
    providers: []
} )
export class SharedModule { }  
