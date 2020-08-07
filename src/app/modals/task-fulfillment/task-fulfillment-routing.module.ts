import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskFulfillmentPage } from './task-fulfillment.page';

const routes: Routes = [
  {
    path: '',
    component: TaskFulfillmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskFulfillmentPageRoutingModule {}
