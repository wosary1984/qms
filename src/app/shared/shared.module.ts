import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ContentHeaderComponent } from './content-header/content-header.component';
import { WaferComponent } from './wafer/wafer.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DatepickerComponent } from './control/datepicker/datepicker.component';
import { DatatableComponent } from './control/datatable/datatable.component';
import { TimelineComponent } from './control/timeline/timeline.component';
import { ToolbarComponent } from './control/toolbar/toolbar.component';
import { SelectComponent } from './control/select/select.component';

@NgModule( {
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ContentHeaderComponent,
        ToolbarComponent,
        WaferComponent,
        TimelineComponent,
        ConfirmDialogComponent,
        DatepickerComponent,
        DatatableComponent,
        SelectComponent
    ],
    exports: [
        ContentHeaderComponent,
        ToolbarComponent,
        WaferComponent,
        TimelineComponent,
        ConfirmDialogComponent,
        DatepickerComponent,
        DatatableComponent,
        SelectComponent
    ],
    providers: []
} )
export class SharedModule { }  
