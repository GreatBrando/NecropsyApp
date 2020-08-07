import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProcedurePage } from './view-procedure.page';

const routes: Routes = [
  {
    path: '',
    component: ViewProcedurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewProcedurePageRoutingModule {}
