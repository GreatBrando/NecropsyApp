import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AnimalWorklistPageRoutingModule } from './animal-worklist-routing.module';
import { AnimalWorklistPage } from './animal-worklist.page';
import { TaskFulfillmentPage } from '../modals/task-fulfillment/task-fulfillment.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    AnimalWorklistPageRoutingModule
  ],
  declarations: [AnimalWorklistPage, TaskFulfillmentPage], 
  entryComponents: [TaskFulfillmentPage]
})
export class AnimalWorklistPageModule {}
