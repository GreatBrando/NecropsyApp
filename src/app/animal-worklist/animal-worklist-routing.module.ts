import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalWorklistPage } from './animal-worklist.page';


const routes: Routes = [
  {
    path: '',
    component: AnimalWorklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalWorklistPageRoutingModule {}
