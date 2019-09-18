import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WaferComponent } from './wafer/wafer.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule( {
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ContentHeaderComponent,
        ToolbarComponent,
        WaferComponent,
        TimelineComponent
    ],
    exports: [
        ContentHeaderComponent,
        ToolbarComponent,
        WaferComponent,
        TimelineComponent
    ],
    providers: []
} )
export class SharedModule { }  
