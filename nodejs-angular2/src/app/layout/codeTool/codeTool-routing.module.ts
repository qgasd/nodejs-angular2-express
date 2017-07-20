import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeToolComponent } from './codeTool.component';

const routes: Routes = [
    { path: '', component: CodeToolComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CodeToolRoutingModule { }
