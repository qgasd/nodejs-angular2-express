import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeToolRoutingModule } from './codeTool-routing.module';
import { CodeToolComponent } from './codeTool.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        CodeToolRoutingModule,
        PageHeaderModule
    ],
    declarations: [CodeToolComponent]
})
export class CodeToolModule { }
