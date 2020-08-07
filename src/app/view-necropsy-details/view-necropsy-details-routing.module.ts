import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewNecropsyDetailsPage } from './view-necropsy-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewNecropsyDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewNecropsyDetailsPageRoutingModule {}
