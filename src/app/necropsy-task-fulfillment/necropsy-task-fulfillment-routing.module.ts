import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NecropsyTaskFulfillmentPage } from './necropsy-task-fulfillment.page';

const routes: Routes = [
  {
    path: '',
    component: NecropsyTaskFulfillmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NecropsyTaskFulfillmentPageRoutingModule {}
